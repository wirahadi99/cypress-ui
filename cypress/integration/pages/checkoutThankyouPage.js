export const checkoutThankyouPageUrl = '/thank_you';

export default class CheckoutThankyouPage { 
    static getTotalAmount() {
        return cy.get('.payment-due__price.skeleton-while-loading--lg');
    }
}