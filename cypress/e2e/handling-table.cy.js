import testAutomationPracticePage from "../pom/testAutomationPracticePage.cy";

describe('Handling Table', function () {
  
  it(
    'Verify table data', function () {
      testAutomationPracticePage.visitHome();
      cy.scrollTo('bottom');
      testAutomationPracticePage.getPaginationTableTittle().should('exist');
      testAutomationPracticePage.getPriceTagValue(1).should('have.text','$10.99');
      testAutomationPracticePage.getPriceTagValue(2).should('have.text','$19.99');
      testAutomationPracticePage.getPriceTagValue(3).should('have.text','$5.99');
      testAutomationPracticePage.getPriceTagValue(4).should('have.text','$7.99');
      testAutomationPracticePage.getPriceTagValue(5).should('have.text','$8.99');

      testAutomationPracticePage.getPageButton(2).click();
      testAutomationPracticePage.getPriceTagValue(1).should('have.text','$9.99');
      testAutomationPracticePage.getPriceTagValue(2).should('have.text','$20.99');
      testAutomationPracticePage.getPriceTagValue(3).should('have.text','$15.99');
      testAutomationPracticePage.getPriceTagValue(4).should('have.text','$5.99');
      testAutomationPracticePage.getPriceTagValue(5).should('have.text','$16.99');

      testAutomationPracticePage.getPageButton(3).click();
      testAutomationPracticePage.getPriceTagValue(1).should('have.text','$20.99');
      testAutomationPracticePage.getPriceTagValue(2).should('have.text','$24.99');
      testAutomationPracticePage.getPriceTagValue(3).should('have.text','$30.99');
      testAutomationPracticePage.getPriceTagValue(4).should('have.text','$19.99');
      testAutomationPracticePage.getPriceTagValue(5).should('have.text','$2.99');

      testAutomationPracticePage.getPageButton(4).click();
      testAutomationPracticePage.getPriceTagValue(1).should('have.text','$10.99');
      testAutomationPracticePage.getPriceTagValue(2).should('have.text','$11.99');
      testAutomationPracticePage.getPriceTagValue(3).should('have.text','$13.99');
      testAutomationPracticePage.getPriceTagValue(4).should('have.text','$16.99');
      testAutomationPracticePage.getPriceTagValue(5).should('have.text','$17.99');

    }
  );
});
