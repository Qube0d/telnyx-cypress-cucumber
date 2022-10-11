import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page';
import blogPage from "../../pages/blog.page";

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
Then('I scroll to footer block', () => {
    mainPage.scrollFooterBlock();
});
And('I click "Blog" button', () => {
    mainPage.clickBlog();
    cy.url().should('eq', 'https://telnyx.com/resources')
});
Then('I click on "Messaging" from "Filter by product"', () => {
    blogPage.clickMessaging();
});
And('I check URL "Messaging"', () => {
    cy.url().should('include', '/resources?topic=Messaging')
});
Then('I click on "Verify API" from "Filter by product"', () => {
    blogPage.clickVerifyApi();
});
And('I check URL "Verify API"', () => {
    cy.url().should('include', 'resources?topic=Verify%20API')
});
Then('I click on "Sip Trunking" from "Filter by product"', () => {
    blogPage.clickSipTrunking();
});
And('I check URL "Sip Trunking"', () => {
    cy.url().should('include', 'resources?topic=SIP%20Trunking')
});Then('I click on "Fax" from "Filter by product"', () => {
    blogPage.clickFax();
});
And('I check URL "Fax"', () => {
    cy.url().should('include', 'resources?topic=Fax')
});
Then('I click on "Wireless" from "Filter by product"', () => {
    blogPage.clickWireless();
});
And('I check URL "Wireless"', () => {
    cy.url().should('include', 'resources?topic=Wireless')
});










