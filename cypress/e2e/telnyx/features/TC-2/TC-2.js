import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page';
import supportPage from '../../pages/support.page'
const footerCompanyMenuItems = [
    'About Us',
    'Careers',
    'Data & Privacy',
    'Support Center',
    'Report Abuse',
    'Privacy Policy',
    'Cookie Policy',
    'Acceptable Use Policy',
    'Website Terms and Conditions',
    'Law Enforcement Request',
  ];

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
And('I check if all menu sections have the necessary tabs', () => {
    footerCompanyMenuItems.length
  });