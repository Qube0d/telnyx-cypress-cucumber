import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page';
import signUpPage from '../../pages/sign.up.page';



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
Then('In header check button "Sign up" for visible', () => {
    mainPage.checkHeaderSignUp();
});
And('I click "Sign up" button', () => {
    mainPage.clickSignUp();
});
Then('I will be redirected to "Sign up" page', () => {
    cy.url().should('eq', 'https://telnyx.com/sign-up')
});
And('I check title of page', () => {
    signUpPage.checkHeaderSignUp();
})

        // Then In header check button "Sign up" for visible
        // And I click "Sign up" button
        // Then I will be redirected to "Sign up" page
        // And I check title of page