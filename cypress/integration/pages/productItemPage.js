export const productItemPageUrl = '/products';

export default class productItemPage {
    static getProductTitleName() {
        return cy.get('h1.tt-title.no-translate');
    }

    static getAddToBasketButton() {
        return cy.get('.btn-addtocart.addtocart-js');
    }

    static getPopupSuccessAddItemToBaksetText() {
        return cy.get('.tt-modal-messages').first();
    }

    static getSeeBasketButton() {
        return cy.get('.ttmodalbtn').contains('Lihat Keranjang');
    }

    static getProductPrice() {
        return cy.get('.new-price').first();
    }
}