export default class NavBar {
    static clickOnLogo() {
        cy.get('.brand').click()
    }

    static enterSearchText(text) {
        cy.get('#searchTerm').type(text + ' {enter}')
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static userLogout() {
        cy.zerologout()
    }

    static checkForSignInButton() {
        cy.isVisible('#signin_button')
    }
}