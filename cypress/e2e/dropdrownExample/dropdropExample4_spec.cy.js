
/// <reference types="cypress"/>


describe('dropdown example - select tag', function(){


    it('verify dropdown', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')


        cy.get('#select2-billing_country-container').click()


        let countrySearch = 'Italy';

        //perform enter keyboard operation
        //cy.get('.select2-search__field').type('Ita').type('ly')
        //cy.get('.select2-search__field').type(countrySearch +'{enter}')

        //cy.get('.select2-search__field').type(`${countrySearch}{enter}`)

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text',countrySearch)


    })



})