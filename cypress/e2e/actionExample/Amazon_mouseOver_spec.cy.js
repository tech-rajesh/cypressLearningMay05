/// <reference types="cypress" />



describe('Action Trigger Example', ()=> {


    it.skip('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

        //cy.xpath("//*[@type='text']").type('iphone 14')


        //identification
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')

        cy.xpath("//span[text()='Create a Wish List']").click()



        cy.title().should('eq', 'Wish List')


    })


    it.only('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

        //identification
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')

        cy.xpath("//span[text()='Create a Wish List']").trigger('mouseover').click()



        cy.title().should('eq', 'Wish List')


    })


})