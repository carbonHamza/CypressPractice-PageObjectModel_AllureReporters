import NavBar from "../page-objects/components/NavBar";
import NavTab from "../page-objects/components/NavTab";
import PayBillsTab from "../page-objects/components/PayBillsTab";
import LoginPage from "../page-objects/pages/LoginPage";
import PayBillsPage from "../page-objects/pages/PayBillsPage";
import AccountSummaryPage from "../page-objects/pages/AccountSummaryPage";
import { url, login_username, login_password } from "../config"



describe('Testing Currency Exchange Converter', () => {
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

    it('Should Navigate to Purchase Foreign Currency page', () => {
        PayBillsTab.clickPurchaseForeignCurrency()
    })

    it('Should fill in the relevent information', () => {
        PayBillsPage.enterCurrencyInfo()
    })

    it('Verify correct conversion amount', () => {
        
    })

    it('User logsout', () => {
        NavBar.userLogout()
    })
})