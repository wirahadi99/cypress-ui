export const flipGlobePageUrl = '/en/flip-globe';
import GeneralFlow from "../support/flow/general-flow";

export default class flipGlobePage {
    
    static getChooseCountryButton() {
        return cy.get('.chakra-menu__menu-button');
    }
    static getSearchCountryField() {
       return cy.get('[placeholder="Search country or currency code"]');
    }
    static getSelectCountry() {
        return cy.get('.css-1i33ipy');
     }
     static getInputAmountIdr() {
        return cy.get('[placeholder="Input amount in IDR"]');
     }
     static getInputAmountGbp() {
        return cy.get('[placeholder="Input amount in GBP"]');
     }
     static getCurrencyCode(index) {
        return cy.get(`.css-6ccagd > div:nth-of-type(${index}) .css-1lazn32`);
     }
     static getCurrentRate() {
        return cy.get('.css-mqm6w4 > .css-70qvj9 > .chakra-text');
     }
     static getTransferFee() {
        return cy.get('.css-1kggdj1 > .css-1int6b');
     }
     static getTotalPay() {
        return cy.get('.css-1151a72');
     }
     static sendMoney(idrAmount) {
        this.getChooseCountryButton().click();
        this.getSearchCountryField().type('GBP');
        this.getSelectCountry().click();
        this.getCurrencyCode(1).should('contain','IDR');
        this.getCurrencyCode(2).should('contain','GBP');
        this.getInputAmountIdr().type(idrAmount);
        GeneralFlow.calculateExchange(idrAmount)
        .then((result) => {
          let gbpAmount = result.result;
          this.getInputAmountGbp().should('have.value',gbpAmount);
        });
        GeneralFlow.exchangerates()
        .then((result) => {
          let transferFee = result.transferFee;
          let excangeRate = result.excangeRate;
          let currencyCode = result.currencyCode;
          let textString = `1 ${currencyCode} = ${excangeRate} IDR`
          this.getCurrentRate().should('have.text',textString);
          this.getTransferFee().should('have.text',transferFee);
          this.getTotalPay().should('have.text',idrAmount+transferFee);
        });
      }
}