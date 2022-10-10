import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from '../../pages/main.page';
import supportPage from '../../pages/support.page';
import aboutPage from '../../pages/about.company.page';
import careersPage from '../../pages/careers.page';
import dataAndPrivacy from '../../pages/dataAndPrivacy.page';
import miscPage from '../../pages/misc.page';
import testPage from '../../pages/test.page';
import developersDocs from '../../pages/developers.docs.page';
import blogPage from '../../pages/blog.page';
import resourceHub from '../../pages/resource.hub.page';
import releaseNotesPage from '../../pages/release.notes.page';


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
And('I click "Developer Docs" button from "Resources" block', () => {
    mainPage.clickDeveloperDocs();
});
When('I moved to "Developer Docs" page and check tittle', () => {
  developersDocs.headerdevelopersDocs();
});
Then('I click back button from browser', () => {
  cy.go('back')
});
When('I come back to main page I click "Blog" link from footer', () => {
  mainPage.clickBlog();
});
Then('I moved to "Blog" page and check tittle', () => {
  blogPage.headerBlog();
});
And('I click back button', () => {
  cy.go('back');
});
When('I come back to main page I click "Resource Hub" link from footer', () => {
  mainPage.clickResourceHub();
});
Then('I moved to "Resource Hub" page and check tittle', () => {
  resourceHub.headerResourceHub();
});
And('I click in browser back button', () => {
  cy.go('back');
})
When('I come back to main page I click "Release Notes" link from footer', () => {
  mainPage.clickReleaseNotes();
});
Then('I moved to page "Release Notes" and check title of page', () => {
  releaseNotesPage.headerReleaseNotes();
});
 

















// And('I click back button from browser', () => {
//     cy.go('back');
// });

// Support Center
// Report Abuse
// Privacy Policy
// Cookie Policy
// Acceptable Use Policy
// Website Terms and Conditions
// Law Enforcement Request
