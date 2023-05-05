/// <reference types="cypress" />

describe('NOP comm Cypress Test', function() {
    it('Visits the NOP Comm application, login and check the menu items', function() {
     
   //Visit the Demo QA Website
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F").viewport('macbook-16')
    


    cy.get('#Email').clear().type('admin@yourstore.com').should('have.value', 'admin@yourstore.com')

    cy.get('#Password').clear().type('admin').should('have.value', 'admin')

    cy.get('.button-1').click()


    //Verify number of items present on Widget Tab
    cy.get('.mt-2 > ul > li').should('have.length',10);

    //Verify number of items having Activity as text on menu
    //Get and Find Command (Parent - Child Relationship)

    cy.get('.mt-2 > ul > li').find('[href*="Activity"]').should('have.length',2);
    
  })
})