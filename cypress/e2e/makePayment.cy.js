import NavBar from "../page-objects/components/NavBar";
import NavTab from "../page-objects/components/NavTab";
import PayBillsTab from "../page-objects/components/PayBillsTab";
import LoginPage from "../page-objects/pages/LoginPage";
import PayBillsPage from "../page-objects/pages/PayBillsPage";
import AccountSummaryPage from "../page-objects/pages/AccountSummaryPage";
import { url, login_username, login_password } from "../config"

describe('Test payment to payee', () => {
    before(function() {
        cy.visit(url)
        cy.validURL('index.html')

        NavBar.clickSignIn()
        LoginPage.login(login_username, login_password)
        AccountSummaryPage.checkLoginSuccess()
    })

    it('Should Navigate to Pay Bills page', () => {
        NavTab.clickPayBills()
    })

    it('Should Navigate to Pay Saved Payee page', () => {
        PayBillsTab.clickPaySavedPayee()
    })

    it('Should Enter all the relevent information', () => {
        PayBillsPage.enterPayPayeeInfo()
    })

    it('Click on Add button', () => {
        PayBillsPage.clickPayButton()
    })

    it('Verify success message', () => {
        PayBillsPage.verifyPayPayeeSuccess()
    })

    it('User logsout', () => {
        NavBar.userLogout()
    })
})