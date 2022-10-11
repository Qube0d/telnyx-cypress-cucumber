import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from "../../pages/main.page";



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
Then('I scroll page to "Switch + Save" block', () => {
    mainPage.scrollSwitchSaveBlock();
});
And('I move slider "Make outbound calls" to "362,000"', () => {
    mainPage.moveOutboundCallsSwitcher();
    mainPage.clickVoice();
});
Then('I check "Save up per month" value is "2778"', () => {
    mainPage.checkSaveUP();
});
  
   