
class TestPage{
    scrollSupportCenter() {
        cy.get('footer a[href="https://support.telnyx.com/en/"]').scrollIntoView();
    }
    clickSupportCenter() {
        //cy.get('footer a[href="https://support.telnyx.com/en/"]').click();
        cy.get('footer a[href="https://support.telnyx.com/en/"]').invoke('removeAttr', 'target').click()
    }
    checkUrlSupport() {
        cy.url('https://support.telnyx.com/en/').should('include', '/support.telnyx.com/en/')
    }
    checkRedirectionToSupportPage() {
        cy.get('[class="header__headline"]').should(
            'have.text',
            'Support Center');
    }
    scrollFooter() {
        cy.get('.sc-7b6c9f9b-3').scrollIntoView();
    }
        clickBackCompany() {
        mainPage.scrollFooterBlock();
        mainPage.clickAboutUSFooter();
        aboutCompanyPage.clickBack();
        mainPage.scrollFooterBlock();
        mainPage.clickCareers();
        careersPage.clickBack();
    }


// {
//     cy.get('//h2[contains(text(),"Getting Started")]')
// }



    checkRedirectionToTermsPage = () => {
        cy.get('[href="/terms-and-conditions-of-service"]')
        .invoke('removeAttr', 'target')
        .click();
    };
    // checkMessagePresenceOnPage = () => {
    //     cy.get('h1[class*="Text"]').should(
    //     'have.text',
    //     'TELNYX TERMS AND CONDITIONS OF SERVICE'
    // );
  };


module.exports = new TestPage();