
/// <reference types="cypress"/>


describe('dropdown example - autoguggestion', function(){


    it('verify dropdown', ()=>{

        cy.visit('https://www.wikipedia.org/')


        let searchItem = 'Delhi'

        cy.get('input#searchInput').clear().type(searchItem)



        //validation ----- autosuggestion count

        cy.get('h3.suggestion-title').should('have.length', 6)
        cy.get('h3.suggestion-title').should('have.length.greaterThan', 4)


        //cy.get('h3.suggestion-title').contains('Delhi University')


        cy.get('h3.suggestion-title').contains('Delhi University').click();



        //validation
        cy.title()
            .should('eq', '')
            .should('contain', '')
            .should('not.eq', '')               //negative testing


        cy.url()
            .should('eq', '')
            .should('contain', '')
            .should('not.eq', '')               //negative testing


    })



})