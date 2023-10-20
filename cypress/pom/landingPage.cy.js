export default class landingPage {
    
    static getButtonLearnMoreSendMoney() {
        return cy.get('.chakra-button[href="/en/flip-globe"]');
    }
    static visitHome() {
       return cy.visit('https://flip.id/landing');
    }
}