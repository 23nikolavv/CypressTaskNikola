class ShoppingCart {
     clickCheckOutButton() {
        return cy.get('[data-test="checkout"]').click()
    }

    typeFirstNameBox(firstName) {
     return  cy.get('[data-test="firstName"]').type(firstName).should('have.value', firstName)
    }

    typefamilyNameBox(familyName) {
        return cy.get('[data-test="lastName"]').type(familyName).should('have.value', familyName)
    }
    typePostalCodeBox(postalCode) {
        return cy.get('[data-test="postalCode"]').type(postalCode).should('have.value', postalCode)
    }

    clickContinueButton() {
        return cy.get('[data-test="continue"]').click()
    }
    
    
}

export default ShoppingCart;