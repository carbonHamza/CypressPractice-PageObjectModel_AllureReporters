export default class PayBillsTab {
    static clickPaySavedPayee () {
        cy.contains('Pay Saved Payee').click()
    }

    static clickAddNewPayee () {
        cy.contains('Add New Payee').click()
    }

    static clickPurchaseForeignCurrency () {
        cy.contains('Purchase Foreign Currency').click()
    }
}