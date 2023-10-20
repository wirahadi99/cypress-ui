export default class landingPage {
    
    static getButtonLearnMoreSendMoney() {
        return cy.get('.chakra-button[href="/en/flip-globe"]');
    }
    static getFooterSupportEwallet() {
        return cy.get('h4:nth-of-type(3)');
    }
    static getFooterGopay() {
        return cy.get('[href="/en/blog/cara-top-up-gopay"]');
    }
    static getFooterDana() {
        return cy.get('[href="/en/blog/cara-praktis-top-up-dana"]');
    }
    static getFooterShopeepay() {
        return cy.get('[href="/en/blog/cara-aktivasi-dan-top-up-shopeepay"]');
    }
    static getFooterOvo() {
        return cy.get('[href="/en/blog/cara-top-up-ovo"]');
    }
    static assertSupportEwallet(){
        this.getFooterSupportEwallet().scrollIntoView();
        this.getFooterGopay().should('have.text','Gopay ');
        this.getFooterDana().should('have.text','DANA ');
        this.getFooterShopeepay().should('have.text','ShopeePay ');
        this.getFooterOvo().should('have.text','OVO');
    }
    static visitHome() {
       return cy.visit('https://flip.id/landing');
    }
}