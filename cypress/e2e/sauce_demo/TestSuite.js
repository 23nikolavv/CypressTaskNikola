//import 'cypress-ifame'
import HomePage from '../pageObject/HomePage'
import LoginPage from '../pageObject/LoginPage'
import ShoppingCart from '../pageObject/ShoppingCart'

describe('Test Suite Login Page', function() {
    beforeEach(function(){
   
        cy.fixture('users').then(function(users) {
    this.users = users
  
        })
        cy.fixture('products').then(function(products) {
    this.products = products
          
        })
        cy.fixture('userslogin').then(function(account) {
            this.account = account
                  
            })
       
    }) 
    it('Checkout with multiple items and price validation', function() {
    const homePage = new HomePage();
    const shoppingCart = new ShoppingCart();

        cy.login(this.users.username, this.users.password)

        homePage.assertItemList(6)

        this.products.productName.forEach(function(element) {
        cy.selectProduct(element)
       })

        homePage.clickShoppingCart()
        shoppingCart.clickCheckOutButton()
        shoppingCart.typeFirstNameBox(this.users.firstName)
        shoppingCart.typefamilyNameBox(this.users.lastName)
        shoppingCart.typePostalCodeBox(this.users.postalCode)
        shoppingCart.clickContinueButton()
        cy.CheckTotalValue()   
        
    })

    it('Login with multiple users', function() {
        const loginPage = new LoginPage();
        const homePage = new HomePage()
        cy.visit('https://www.saucedemo.com/')
       this.account.account.forEach(function(el) {
        loginPage.getUserName(el.username)
        loginPage.getPassword(el.password)
        loginPage.clickLogin()
        
        homePage.checkURL()
        homePage.checkProductList()
        homePage.assertItemList(6)


        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click({force: true})

       })
      
    })
})