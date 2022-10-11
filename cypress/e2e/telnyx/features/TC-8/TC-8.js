import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from "../../pages/main.page";
import networkPage from '../../pages/network.page'



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
Then('I click "Network" button from header', () => {
    mainPage.clickNetworkPage();
});
And('I scroll page to "See our Pricing" button and click on it', () => {
    networkPage.clickSeeOurPricing();
});
