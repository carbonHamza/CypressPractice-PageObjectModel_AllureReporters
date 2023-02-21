import BasePage from "../BasePage"

export default class PayBillsPage extends BasePage {
    static verifyAddNewPayeePage() {
        cy.contains('Who are you paying').should('be.visible')
    }

    static enterPayeeName() {
        cy.get('#np_new_payee_name').type('User 07')
    }

    static enterPayeeAddress() {
        cy.get('#np_new_payee_address').type('6th Avenue, NY')
    }

    static enterAccountNumber() {
        cy.get('#np_new_payee_account').type('01010705454647')
    }

    static enterPayeeDetails() {
        cy.get('#np_new_payee_details').type('Random User')
    }

    static clickAddButton() {
        cy.get('#add_new_payee').click()
    }

    static verifyNewPayeeCreation() {
        BasePage.pause(3000)
        cy.get('#alert_content').should('be.visible').and('contain','User 07')
    }

    static enterPayPayeeInfo() {
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('5')
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2023-02-01 {enter}')
        cy.get('#sp_description').type('misc. payment')
    }

    static clickPayButton() {
        cy.get('#pay_saved_payees').click()
    }

    static verifyPayPayeeSuccess() {
        BasePage.pause(2000)
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    }

    static enterCurrencyInfo() {
        cy.get('#pc_currency').select('DKK')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    }
}