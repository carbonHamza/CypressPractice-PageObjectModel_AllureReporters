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

    // it('User clicks on Sign-in button', () => {
    //     NavBar.clickSignIn()
    // })

    // it('User enters invalid login credentials', () => {
    //     LoginPage.login('invalid username', 'invalid password')
    // })

    // it('Verify Error message must be displayed', () => {
    //     LoginPage.displayErrorMessage()
    // })

    it('Testing login with valid credentials', () => {
        NavBar.clickSignIn()
        LoginPage.login(login_username, login_password)
        AccountSummaryPage.checkLoginSuccess()
        NavBar.userLogout()
        cy.validURL('index.html')
    })
})

// describe('Testing Login with valid credentials', () => {
//     before(function () {
//         cy.visit(url)

//         cy.validURL('index.html')
//     })

//     it('User clicks on Sign-in button', () => {
//         NavBar.clickSignIn()
//     })

//     it('User enters valid login credentials', () => {
//         LoginPage.login(login_username, login_password)
//     })

//     it('Verify user has successfully logged in', () => {
//         AccountSummaryPage.checkLoginSuccess()
//     })

//     it('User then logs-out', () => {
//         NavBar.userLogout()
//     })

//     it('Verify user has logged out', () => {
//         cy.validURL('index.html')
//     })
// })