import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page'


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
});
And('I click on "LinkedIn" button', () => {
    mainPage.clickConnectOnLinkedIn();
})
Then('I moved to another page and check title of page', () => {
    mainPage.checkUrlLinkedIn();
})
