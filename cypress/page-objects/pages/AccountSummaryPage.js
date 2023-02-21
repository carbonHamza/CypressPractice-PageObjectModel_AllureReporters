export default class AccountSummaryPage {
    static checkLoginSuccess() {
        cy.validURL('account-summary.html')
    }
}