// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --


 Cypress.Commands.add('login', (name, password) => {       
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(name).should('have.value', name)
    cy.get('[data-test="password"]').type(password).should('have.value', password)
    cy.get('[data-test="login-button"]').click().get('.inventory_list').should('be.visible')
    cy.url().should('include', 'inventory.html') })

    Cypress.Commands.add('selectProduct', (product) => {
        cy.get('.inventory_item').each(($el, index, $list) => {
            const item = $el.find('.inventory_item_name').text()
            if(item.includes(product)) {
                cy.wrap($el).find('.btn.btn_primary.btn_small.btn_inventory').click()
            }
           })

    })

Cypress.Commands.add('CheckTotalValue', () => {
    var sum = 0;
    cy.get('.inventory_item_price').each(($el, index, $list) => {
        const amount = $el.text()
        var res =amount.split("$")
        res=res[1].trim()
        sum=sum+Number(res)
        cy.get('.summary_subtotal_label').then(function(element) {
            var total = element.text()
            total=total.split("$")
            total=total[1].trim()
            expect(sum).to.eql(Number(total))   

    })

    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })