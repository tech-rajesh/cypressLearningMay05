/// <reference types="cypress" />



describe('Sreenshot Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

        cy.xpath('//input[@id="twotabsearchtextbox"]').type('iphone 14')

        cy.xpath('//input[@id="nav-search-submit-button"]').click()


        //validate url/title


        cy.title().should('contain', 'iphone 14')

        //cy.title().contains('iphone 14')
        //cy.url().should('contain', 'iphone 14')
            // .should('not.contain', 'iphone 13')

        //take a screenshot

        cy.screenshot()

    })


})