


describe('API Testing', ()=>{


    it.skip('verify university api test', ()=>{


        //api testing
        cy.request('GET', 'http://universities.hipolabs.com/search?country=Philippines')
        .its('status')
        .should('eq', 200)



    })





    it('verify university api test', ()=>{


        //api testing
        cy.request('GET', 'http://universities.hipolabs.com/search?country=Philippines').then( (response) =>{




                expect(response.status).to.eq(200)
                expect(response.body[0].name).to.eq('Adamson University')



        } )
        


    })


})