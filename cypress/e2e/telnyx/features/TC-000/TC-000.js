import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
//import testPage from '../../pages/test.page';
import supportPage from '../../pages/support.page';
import mainPage from '../../pages/main.page';
import misc from '../../pages/misc.page'


Given('I go to telnyx.com main page', () => {
  cy.viewport(1940, 1080);
  cy.visit('https://telnyx.com');
});
And('If the cookies modal window is opened I close it', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[aria-label="close and deny"]').length > 0) {
      cy.get('[aria-label="close and deny"]').click();
    }
  });
});
Then('I scroll down main page too footer', () => {
    mainPage.scrollFooterBlock();
})
And('I click on "Support Center"', () => {
    mainPage.clickSupportCenter();
})
Then('I check title of the page', () => {
  supportPage.checkSupportPageTitle();
});
And('I go back too main page', () => {
  misc.clickBack();
  misc.mainPageCalcCheck();
})
