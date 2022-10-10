import commonPage from './common.page';

class SupportPage {
  checkSupportPageTitle = () => {
    cy.get('[class="header__headline"]').should('have.text', 'Support Center');
  };

  fillSearchInput() {
    cy.get('[class*="search__input"]')
      .type(commonPage.getRandomData())
      .type('{enter}');
  }
  pressEnterButton() {
    cy.get('[class*="search__input"]').type('{enter}');
  }
  checkSearchInputData = () => {
    cy.get('[class="c__light"]').should(
      'have.text',
      commonPage.getRandomData()
    );
  };
}

module.exports = new SupportPage();
