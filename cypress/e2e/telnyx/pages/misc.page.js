import mainPage from "./main.page";
import aboutCompanyPage from "./about.company.page";
import careersPage from "./careers.page";


class MiscPage{
    
    invalidUserData = {
    workEmail: this.getRandomData(6) + '@test.ua',
    fullName: 'Igour Kirich' + this.getRandomData(4),
    password: 'Test' + this.getRandomData(),
    firstName: 'Igor' + this.getRandomData(3),
    lastName: 'Kirich' + this.getRandomData(3),
    phoneNumber: this.getRandomData(7),
    companyWebsite: 'https:www.ukr.net',
  } 
    

    mainPageCalcCheck() {
        cy.get('.Text-sc-5o8owa-0>a>span').should('be.visible');
    }

    clickBack() {
        cy.go('back');
    }




}
module.exports = new MiscPage();