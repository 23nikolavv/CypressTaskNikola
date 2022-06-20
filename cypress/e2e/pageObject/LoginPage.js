class LoginPage {
     getUserName(username) {
    return   cy.get('[data-test="username"]').type(username).should('have.value', username)
    }
    getPassword(password) {
        return cy.get('[data-test="password"]').type(password).should('have.value', password)
    }
    clickLogin() {
        return cy.get('[data-test="login-button"]').click()
    }
}
export default LoginPage;