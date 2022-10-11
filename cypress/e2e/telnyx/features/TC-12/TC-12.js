import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page';

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
When('I moved on "Pricing" blog I see drop down menu', () => {
    mainPage.focusPricingDropDown();
});
Then('I click on "See all pricing" button', () => {
    mainPage.clickSeeAllPricing();
});
And('I moved too new URL', () => {
    mainPage.URLSeeAllPricing();
});

 