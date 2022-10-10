import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from "../../pages/main.page";
import signUpPage from "../../pages/sign.up.page";
//import miscPage from "../../pages/misc.page";



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
Then('I click "Sign up" button', () => {
    mainPage.clickSignUp();
});
When('I will be redirected to "Sign up" page', () => {
    cy.url().should('eq', 'https://telnyx.com/sign-up');
});
And('I check title of page', () => {
    signUpPage.checkHeaderSignUp();
});
Then('I fill all fields', () => {
    signUpPage.fillAll({login: 'John Dou', name: 'test@gmail.com', pass: '123Test123'});
    //signUpPage.fillEmailField();
    //mainPage.fillAll({login: '1', pwd: '2', pass: '3'})
});
And('I click "I want to receive emails"', () => {
    signUpPage.clickEmailReceiveCheckBox();
});
Then('I click "I agree to the Terms"', () => {
    signUpPage.clickTermsAndConditionsCheckBox();
});
And('I click on "Create account" button', () => {
    signUpPage.clickCreateAccount();
});
Then('I get error alert "Password must have"', () => {
    signUpPage.PasswordMust();
});





// And('I fill "Full name" field with John Dou', () => {
//     signUpPage.fillFullNameField();
// });
// Then('I fill "Password" field with 123Test123', () => {
//     signUpPage.fillPasswordField();
// });
// When('I fill all field click on "I agree to the Terms"', () => {
//     signUpPage.clickTermsAndConditionsCheckBox();
// });
// Then('I click "I want to receive emails"', () => {
//     signUpPage.clickEmailReceiveCheckBox();
// });
// And('I click on "Create account" button', () => {
//     signUpPage.clickCreateAccount();
// });
// Then('I get errore "Password must"', () => {
//     signUpPage.PasswordMust();
// });
    