export const checkoutShippingPageUrl = '/shipping';

export default class CheckoutShippingPage { 
    static getContinueToShippingButton() {
        return cy.get('[type="submit"]').first();
    }

    static getDeliveryMethodRadioButtonByPosition(position) {
        return cy.get('[type="radio"]').eq(position-1);
    }

    static getTotalAmount() {
        return cy.get('.notranslate').last();
    }
}