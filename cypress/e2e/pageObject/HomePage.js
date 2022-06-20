class HomePage {

    checkURL() {
        return cy.url().should('include', 'inventory.html')
    }

    checkProductList() {
        return cy.get('.inventory_list').should('be.visible')
    }
     clickShoppingCart() {
        return cy.get('.shopping_cart_link').click()
    }

    assertItemList(items) {
     return   cy.get('.inventory_list').find('.inventory_item').should('have.length',items)
    }
    
    
}

export default HomePage;