/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

        cy.xpath("//*[@type='text']").type('iphone 14')

        

    })


})