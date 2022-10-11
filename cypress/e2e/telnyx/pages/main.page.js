
class MainPage {
    //HEADER
    locatorHeader = {
        NetworkPage() {
            return cy.get('span a[href="/solutions/global-ip-network"]');
        },
        SignUp() {
            return cy.get('header li a[href="/sign-up"]');
        },
        CallUs() {
            return cy.get('[type="button"]');
        },
        SupportCenter() {
            return cy.get('.sc-ee0ec023-2 a:nth-child(3)');
        },
        LogIn() {
            return cy.get('.sc-ee0ec023-2 a:nth-child(4)');
        },
        TalkToExpert() {
            return cy.get('header li a[href="/contact-us"]');
        },
        JoinTheWaitlist() {
            return cy.get('header span a[href="/products/storage"]');
        }
    }
    //FOOTER
    locatorsFooter = {
        //BLOCK FOOTER
        FooterBlock() {
            return cy.get('.sc-7b6c9f9b-3');
        },
        //Resources
        DeveloperDocs() {
            return cy.get('footer a[href="https://developers.telnyx.com/docs/v2"]');
        },
        Blog() {
            return cy.get('footer a[href="/resources"]');
        },
        ResourceHub() {
            return cy.get('[href="/learn"]');
        },
        ReleaseNotes() {
            return cy.get('[href="/release-notes"]');
        },
        // Company
        AboutUS() {
            return cy.get('footer a[href="/company/about"]');
        },
        Careers() {
            return cy.get('footer a[href="/company/careers"]');
        },
        DataAndPrivacy() {
            return cy.get('footer a[href="/company/data-privacy"]');
        },
        SupportCenter() {
            return cy.get('footer a[href="https://support.telnyx.com/en/"]');
        },
        ReportAbuse() {
            return cy.get('[href="/report-abuse"]');
        },
        PrivacyPolicy() {
            return cy.get('[href="/privacy-policy"]');
        },
        CookiePolicy() {
            return cy.get('[href="/cookie-policy"]');
        },
        AcceptableUsePolicy() {
            return cy.get('[href="/acceptable-use-policy"]');
        },
        WebsiteTermsAndConditions() {
            return cy.get('[href="/terms-and-conditions"]');
        },
        LawEnforcementRequest() {
            return cy.get('[href="https://telnyx.com/law-enforcement-request"]');
        },
    
        //Mission Control

        SignUp() {
            return cy.get('footer a[href="/sign-up"]');
        },
        LogIn() {
            return cy.get('footer a[href="https://portal.telnyx.com/"]');
        },
    
        //Social

        ConnectOnLinkedIn() {
            return cy.get('[href="https://www.linkedin.com/company/telnyx/"]');
        },
        FollowOnTwitter() {
            return cy.get('[href="https://twitter.com/telnyx"]');
        },
        FollowOnFacebook() {
            return cy.get('[href="https://www.facebook.com/Telnyx/"]');
        }
    }

    //HEADER
    clickSignUp() {
        this.locatorHeader.SignUp().invoke('removeAttr', 'target').click();
    }
    checkHeaderSignUp(){
        this.locatorHeader.SignUp().should('have.text', 'Sign up', 'visible');
    }
    clickNetworkPage() {
        this.locatorHeader.NetworkPage().invoke('removeAttr', 'target').click();
        this.locatorHeader.NetworkPage().should('have.text', 'Network', 'visible');
        cy.url().should('eq', 'https://telnyx.com/solutions/global-ip-network')
    }

    //FOOTER
    //BLOCK FOOTER
    scrollFooterBlock() {
        this.locatorsFooter.FooterBlock().scrollIntoView();
    }
    //Resources
    clickDeveloperDocs() {
        this.locatorsFooter.DeveloperDocs().invoke('removeAttr', 'target').click();
    }
    clickBlog() {
        this.locatorsFooter.Blog().invoke('removeAttr', 'target').click();
    }
    clickResourceHub() {
        this.locatorsFooter.ResourceHub().invoke('removeAttr', 'target').click();
    }
    clickReleaseNotes() {
        this.locatorsFooter.ReleaseNotes().invoke('removeAttr', 'target').click();
    }
    //Company
    clickAboutUSFooter() {
        this.locatorsFooter.AboutUS().invoke('removeAttr', 'target').click();
    }
    clickCareers() {
        this.locatorsFooter.Careers().invoke('removeAttr', 'target').click();
    }
    clickDataAndPrivacy() {
        this.locatorsFooter.DataAndPrivacy().invoke('removeAttr', 'target').click();
    }

    //Mission Control
    clickSignUpFooter() {
        this.locatorsFooter.SignUp().invoke('removeAttr', 'target').click();
    }
    checkHeaderSignUpFooter(){
        this.locatorsFooter.SignUp().should('have.text', 'Sign up ', 'visible');
    }

    scrollSupportCenter() {
        this.locatorsFooter.SupportCenter().scrollIntoView().should('be.visible');
    }
    clickSupportCenter() {
        this.locatorsFooter.SupportCenter().invoke('removeAttr', 'target').click();
    }





        //Social

    clickConnectOnLinkedIn() {
        this.locatorsFooter.ConnectOnLinkedIn().invoke('removeAttr', 'target').click();
    }
    checkUrlLinkedIn() {
        cy.url().should('eq', 'https://www.linkedin.com/company/telnyx/')
    }


}

module.exports = new MainPage();