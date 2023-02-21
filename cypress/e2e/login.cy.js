import NavBar from "../page-objects/components/NavBar";
import LoginPage from "../page-objects/pages/LoginPage";
import AccountSummaryPage from "../page-objects/pages/AccountSummaryPage";
import { url, login_username, login_password } from "../config"

describe('Testing Login', () => {
    beforeEach(function () {
        cy.visit(url)

        cy.validURL('index.html')
    })

    it('Testing login with invalid credentials', () => {
        NavBar.clickSignIn()
        LoginPage.login('invalid username', 'invalid password')
        LoginPage.displayErrorMessage()
    })


    it('Testing login with valid credentials', () => {
        NavBar.clickSignIn()
        LoginPage.login(login_username, login_password)
        AccountSummaryPage.checkLoginSuccess()
        NavBar.userLogout()
        cy.validURL('index.html')
    })
})