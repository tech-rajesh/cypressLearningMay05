/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://paytm.com/')

        
        cy.xpath('//span[text()="Sign In"]').click()

        

    })


})