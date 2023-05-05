


describe('API Testing', ()=>{


   

    it.skip('verify gitHUB api test', ()=>{


        //api testing
        cy.request('GET', 'https://api.github.com/repositories').then( (response) =>{




                expect(response.status).to.eq(200)
                //expect(response.body[0].name).to.eq('Adamson University')



        } )
        


    })


    it('List repositories for the authenticated user', ()=>{


        //api testing
        cy.request('GET', 'https://api.github.com/user/repos').then( (response) =>{




                expect(response.status).to.eq(200)
                //expect(response.body[0].name).to.eq('Adamson University')



        } )
        


    })


})