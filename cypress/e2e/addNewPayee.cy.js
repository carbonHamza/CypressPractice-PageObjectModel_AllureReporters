import NavBar from "../page-objects/components/NavBar";
import NavTab from "../page-objects/components/NavTab";
import PayBillsTab from "../page-objects/components/PayBillsTab";
import LoginPage from "../page-objects/pages/LoginPage";
import PayBillsPage from "../page-objects/pages/PayBillsPage";
import AccountSummaryPage from "../page-objects/pages/AccountSummaryPage";
import { url, login_username, login_password } from "../config"


describe('Create New Payee Test', () => {
    before(function() {
        cy.visit(url)
        cy.validURL('index.html')
    })

    it('Should Login into the application', () => {
        NavBar.clickSignIn()
        LoginPage.login(login_username, login_password)
        AccountSummaryPage.checkLoginSuccess()
    })

    it('Should navigate to Pay Bills Page', () => {
        NavTab.clickPayBills()
    })

    it('Should navigate to Add New Payee page', () => {
        PayBillsTab.clickAddNewPayee()
        PayBillsPage.verifyAddNewPayeePage()
    })

    it('Fill Payee information form', () => {
        PayBillsPage.enterPayeeName()
        PayBillsPage.enterPayeeAddress()
        PayBillsPage.enterAccountNumber()
        PayBillsPage.enterPayeeDetails()
    })

    it('Click on Add button', () => {
        PayBillsPage.clickAddButton()
    })

    it('Verify New Payee has been added', () => {
        PayBillsPage.verifyNewPayeeCreation()
    })

    it('Should logout', () => {
        NavBar.userLogout()
        cy.validURL('index.html')
    })
})