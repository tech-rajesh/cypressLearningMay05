

/// <reference types="cypress"/>



describe('WebTable - test', function(){

    before(function(){

        //cy.visit('https://the-internet.herokuapp.com/tables')


        cy.log('----------before section-------------')
    })

    it.skip('WebTableTest1', ()=>{

        //cy.get('table#table1 > tbody')

        cy.get('table#table1').find('tbody').find('tr').should('have.length', 4)

        //cy.get('table#table1 > tbody >tr').should('have.length', 4)


        //first element
        cy.get('table#table1 > tbody >tr').first().find('td').find('a').first().click()


        //last element ---- delete
        cy.get('table#table1 > tbody >tr').last().find('td').find('a').last().click()


        cy.url().should('contain', 'delete')



    })




    it('WebTableTest2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/tables')
        //cy.get('table#table1 > tbody')


        //rows validation
        cy.get('table#table1').find('tbody').find('tr').should('have.length', 4)

        
        //columns validation
        //cy.get('table[id="table1"]').find('thead > tr > th').should('have.length', 6)


        cy.get('table#table1').find('thead > tr > th').should('have.length', 6)




        //
        cy.get('table#table1').find('tbody > tr').find('td').each(  (ele, index, list) =>{



                cy.log(`element text: ${index} :    ${ele.text()} `)


                let actualText = ele.text();
                let expectedText = "jsmith@gmail.com"

                if(expectedText==actualText){

                    cy.log(`******************found the element : ${actualText}`  )

                }


        })




    })


})