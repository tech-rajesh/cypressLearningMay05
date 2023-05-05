/// <reference types="cypress" />



describe('Action Example', ()=> {


    it('click on link - Mobile', ()=>{

        cy.visit('https://www.amazon.in/')

        cy.contains('Mobiles').click()


        // cy.get('a').contains('Mobiles')

    })


    


})