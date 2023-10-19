export const checkoutPaymentPageUrl = '/payment';

export default class CheckoutPaymentPage { 
    static getPaymentMethodRadioButtonByPosition(position) {
        return cy.get('[type="radio"]').eq(position-1);
    }

    static getPayNowButton() {
        return cy.get('[type="submit"]').first();
    }

    static getTotalAmount() {
        return cy.get('.notranslate').last();
    }
}