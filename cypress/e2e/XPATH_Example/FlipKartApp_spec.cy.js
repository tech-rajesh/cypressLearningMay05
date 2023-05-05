/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.flipkart.com/')

        
        //cy.xpath('//*[contains(@placeholder,"brands")]').type('iphone 14')

        // cy.xpath('//input[contains(@placeholder,"brands")]').type('iphone 14')

        cy.xpath('//input[starts-with(@placeholder,"Search")]').type('iphone 14 pro')

        

    })


})