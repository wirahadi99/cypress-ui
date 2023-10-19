import HomePage from '../pages/mainPage';
import voilaAccount from '../../fixtures/account/voila-account.json'
import Header from '../pages/component/header';
import LoginPage, {loginPageUrl} from '../pages/loginPage';
import { accountPageUrl } from '../pages/accountPage';
import MarketplaceListPage, { menCollectionMarketplace } from '../pages/marketplaceListPage';
import NavbarFilter from '../pages/component/navbarFilter';
import ProductItemPage, { productItemPageUrl } from '../pages/productItemPage';
import CartPage, { cartPageUrl } from '../pages/cartPage';
import CheckoutPaymentPage, { checkoutPaymentPageUrl } from '../pages/checkoutPaymentPage';
import CheckoutPage, { checkoutPageUrl } from '../pages/checkoutPage';
import CheckoutShippingPage, { checkoutShippingPageUrl } from '../pages/checkoutShippingPage';
import CheckoutThankyouPage, { checkoutThankyouPageUrl } from '../pages/checkoutThankyouPage';


describe('Given User go to voila website and login', function () {
  beforeEach(function () {
    HomePage.visitHome();
    Header.getMyAccountButton().click();
    Header.getLoginButton().click();
    cy.url().should('include', loginPageUrl);

    LoginPage.submitLogin({
      email: voilaAccount.user.email, 
      password: voilaAccount.user.password
    });
    cy.url().should('include', accountPageUrl);
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    /**
      * i use this because to prevent failing test because there
      * is uncaught exception and that make the test fail
      */
    return false
  });

  it(
    'When user select men category and filter for shoes and price below IDR 10.000.000 and buy the first product on marketplace and submit address with changing first name and last name and choose JNT delivery method and choose midtrans payment method then user success on checking out the item', function () {
      Header.getMenCategory().click({ force: true });
      cy.url().should('include', menCollectionMarketplace);

      NavbarFilter.getNavbarFilterCheckbox('Shoes').click();
      const maxPrice = 9999999;
      NavbarFilter.typeFilterMaximumAmount(9999999);
      cy.url().should('include', maxPrice);

      MarketplaceListPage.getProductItemByPosition(1).scrollIntoView();
      MarketplaceListPage.getProductItemTitleByPosition(1).then(($productName) => {
          const productName = $productName.text();
          cy.wrap(productName).as('productName');
      })
      MarketplaceListPage.getProductItemPriceByPosition(1).then(($productPrice) => {
        const productPrice = $productPrice.text();
        cy.wrap(productPrice).as('productPrice');
      })
      MarketplaceListPage.getProductItemByPosition(1).click();

      cy.url().should('include', productItemPageUrl).then(() => {
        ProductItemPage.getProductTitleName().should('contain.text', this.productName);
        ProductItemPage.getProductPrice().should('contain.text', this.productPrice);
      });
      ProductItemPage.getAddToBasketButton().click();
      ProductItemPage.getPopupSuccessAddItemToBaksetText().should('contain.text', 'Produk berhasil ditambah!');
      ProductItemPage.getSeeBasketButton().click();

      cy.url().should('include', cartPageUrl).then(() => {
        let productPrice;
        productPrice = this.productPrice;
        productPrice = productPrice.replace(/\,/g, '.');
        CartPage.getGrandTotalAmount().should('contain.text', productPrice);
        CartPage.getInputAddressButton().click();

        cy.url().should('include', checkoutPageUrl);
        productPrice = productPrice.replace('IDR ', 'Rp');
        CheckoutPage.getTotalAmount().should('contain.text', productPrice);
        CheckoutPage.submitAndContinueToShipping({
        firstName: 'Ilham Perdana Jalasena', 
        lastName:'Candidate QA'
        });

        cy.url().should('include', checkoutShippingPageUrl);
        CheckoutShippingPage.getTotalAmount().should('contain.text', productPrice);
        const jntDeliveryMethod = 2;
        CheckoutShippingPage.getDeliveryMethodRadioButtonByPosition(jntDeliveryMethod ).check();
        CheckoutShippingPage.getContinueToShippingButton().click();

        cy.url().should('include', checkoutPaymentPageUrl);
        CheckoutPaymentPage.getTotalAmount().should('contain.text', productPrice);
        const midtransPaymentMethod = 1;
        CheckoutPaymentPage.getPaymentMethodRadioButtonByPosition(midtransPaymentMethod).check();

        /**
         * commented because its really checkout the real item on production everytime i run and also it redirected to midtrans
         * CheckoutPaymentPage.getPayNowButton().click();
         * cy.go('back');
         * cy.url().should('include', checkoutThankyouPageUrl);
         * CheckoutThankyouPage.getTotalAmount().should('contain.text', productPrice);
        */
      });
    }
  );
});
