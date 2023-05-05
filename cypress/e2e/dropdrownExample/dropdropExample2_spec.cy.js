
/// <reference types="cypress"/>


describe('dropdown example - select tag', function(){


    it('verify dropdown', ()=>{

        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')




        //select by text
        cy.get('[dir="ltr"] > :nth-child(5)').select('Opel')

        cy.get('[dir="ltr"] > :nth-child(5)').select('Audi')



        //select by value
        cy.get('[dir="ltr"] > :nth-child(5)').select('UK')



        //select by index
        cy.get('[dir="ltr"] > :nth-child(5)').select(5)

        //select item from dropdown ----- using value
        //validation correct value are selected or not
        // cy.get('.globalcountrycode')
        //     .select('Brazil')
        //     .should('have.value', 'Brazil')
        //     .should('contain', 'Brazil')



        //Value  and Text ----- same 
        //value
        //Text
        //Index



        //select element using index
        // cy.get('.globalcountrycode')
        //     .select(5)
        //     .should('have.value', 'Andorra')
        //     .should('contain', 'Andorra')

    })



})