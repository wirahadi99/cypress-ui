export const checkoutPageUrl = '/checkout';

export default class CheckoutPage { 
    static getTotalAmount() {
        return cy.get('.notranslate').last();
    }

    static getInputAddressButton() {
        return cy.get('[name="checkout"]');
    }

    static getFirstName() {
        return cy.get('[name="firstName"]#TextField1');
    }

    static getLastName() {
        return cy.get('[name="lastName"]#TextField2');
    }

    static getContinueToShippingButton() {
        return cy.get('[type="submit"]').first();
    }

    static typeFirstName(firstName) { 
        this.getFirstName().clear();
        this.getFirstName().type(firstName);
    }

    static typeLastName(lastName) { 
        this.getLastName().clear();
        this.getLastName().type(lastName);
    }

    static submitAndContinueToShipping({firstName, lastName}) {
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.getContinueToShippingButton().click();
    }
}