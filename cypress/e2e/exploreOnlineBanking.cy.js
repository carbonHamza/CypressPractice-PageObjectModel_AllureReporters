import NavBar from "../page-objects/components/NavBar";
import NavTab from "../page-objects/components/NavTab";
import LoginPage from "../page-objects/pages/LoginPage";
import AccountSummaryPage from "../page-objects/pages/AccountSummaryPage";
import { url, login_username, login_password} from "../config"

describe('Testing the navigation Tabs in Online Banking Service', () => {
    before(function() {
        // Visiting the Zero Bank Website
        cy.visit(url)
        cy.validURL('index.html')

        // Getting the user to login
        // NavBar.clickSignIn()
        // LoginPage.login(login_username, login_password)
        // AccountSummaryPage.checkLoginSuccess()
    })

    it('User logs in', () => {
        NavBar.clickSignIn()
        LoginPage.login(login_username, login_password)
        AccountSummaryPage.checkLoginSuccess()
    })

    it('Verify user can access Account Activity Page', () => {
        NavTab.clickAccountActivity()
        cy.validURL('account-activity.html')
    })

    it('Verify user can access Transfer Funds Page', () => {
        NavTab.clickTransferFunds()
        cy.validURL('transfer-funds.html')
    })

    it('Verify user can access Pay Bills Page', () => {
        NavTab.clickPayBills()
        cy.validURL('pay-bills.html')
    })

    it('Verify user can access My Money Map Page', () => {
        NavTab.clickMoneyMap()
        cy.validURL('money-map.html')
    })

    it('Verify user can access Online Statements Page', () => {
        NavTab.clickOnlineStatements()
        cy.validURL('online-statements.html')
    })

    it('Verify user can access Account Summary Page', () => {
        NavTab.clickAccountSummary()
        cy.validURL('account-summary.html')
    })

    it('User then logs out', () => {
        NavBar.userLogout()
        cy.validURL('index.html')
    })
})
