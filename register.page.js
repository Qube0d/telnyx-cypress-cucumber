
class RegisterPage {
    locator = {
        workEmail() {
            return cy.get('#email')
        },
        emptyEmail() {
            return cy.get('#email_error')
        },
        emptyFullName() {
            return cy.get('#full_name_error')
        },
        fullName() {
            return cy.get('#full_name')  
        },
        password() {
            return cy.get('#password')
        },
        createAccount() {
            return cy.get('[type="submit"]')
        },
        termsConditions() {
            return cy.get('[aria-labelledby="terms-label"]')
        },
        passwordReq() {
            return cy.get('password_requirements')
        },
        loginBtn() {
            return cy.get('[href="https://portal.telnyx.com/#"]')
        }
            
    };
    clickLoginBtn() {
        this.locator.loginBtn()
            .click();
    }

    clickWorkEmail() {
        this.locator.workEmail()
            .type('test@gmail.com');
    }
    invalidWorkEmail() {
        this.locator.workEmail()
            .type(" ");
    }
    emptyWorkEmail(){
        this.locator.emptyEmail()
    }
    emptyFullName(){
        this.locator.emptyFullName()
    }
    invalidFullName() {
        this.locator.fullName()
            .type(" ");
    }
    invalidPassword() {
        this.locator.password()
            .type(" ");
    }
    clickFullName() {
        this.locator.fullName()
            .type('test@gmail.com');
    }
    clickPassword() {
        this.locator.password()
            .type('test@gmail.com');
    }
    clickCreateAccount() {
        this.locator.createAccount()
            .click();
    }
    clickTermsConditions() {
        this.locator.termsConditions()
            .click();
    }
    checkPasswordReq() {
        return this.locator.passwordReq();
    }








}
export default RegisterPage;


//(`${44}`)