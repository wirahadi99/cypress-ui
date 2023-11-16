export default class testAutomationPracticePage {
    
    static getPageButton(index) {
        return cy.get(`li:nth-of-type(${index}) > [href="#"]`);
    }

    static getPriceTagValue(index) {
        return cy.get(`#productTable tr:nth-of-type(${index}) > td:nth-of-type(3)`);
    }

    static getPaginationTableTittle() {
        return cy.get('#main > div:nth-of-type(3) > .title');
    }
    
    static visitHome() {
       return cy.visit('https://testautomationpractice.blogspot.com/');
    }

    static savedValuePriceTag(){
        var list = [];
        for (let index = 1; index <= 5; index++) {
            this.getPriceTagValue(index).then(($ele) => {
            list.push($ele.text().trim())
            });
        }
        return list;
    }
}