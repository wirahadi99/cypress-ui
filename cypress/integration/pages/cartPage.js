export const cartPageUrl = '/cart';

export default class CartPage { 
    static getGrandTotalAmount() {
        return cy.get('#grandtotal .wcp-original-cart-total');
    }

    static getInputAddressButton() {
        return cy.get('[name="checkout"]');
    }
}