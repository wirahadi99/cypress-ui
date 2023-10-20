import landingPage from '../pom/landingPage.cy';
import flipGlobePage, { flipGlobePageUrl } from '../pom/flipGlobePage.cy';
import navbar from '../pom/component/navbar.cy';

describe('Simulate send money', function () {
  before(function () {
    cy.intercept({
      method: 'GET',
      url: 'https://flip.id/_next/data/xnHlWYVipUMvcb2NgvHCe/en/landing.json'
    }).as('landing.json');

    cy.intercept({
      method: 'GET',
      url: 'https://flip.id/_next/data/xnHlWYVipUMvcb2NgvHCe/en/flip-globe.json'
    }).as('flip-globe.json');
  });
  it(
    'from IDR to GBR', function () {
      landingPage.visitHome();
      cy.url().should('not.contain', 'en');
      navbar.getChangeLanguageButton().click();
      cy.url().should('contain', 'en');
      cy.wait('@landing.json');
      landingPage.getButtonLearnMoreSendMoney().click();
      cy.url().should('contain',flipGlobePageUrl);
      cy.wait('@flip-globe.json');
      flipGlobePage.sendMoney(1000000);
    }
  );
});
