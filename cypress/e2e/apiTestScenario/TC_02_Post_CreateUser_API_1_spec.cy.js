


describe('Create user', ()=>{


    it.only('create user', () => {
        cy.request({
                method: "POST", 
                url: "https://reqres.in/api/users",
                body: 	{
                    "name": "Nikki Tan",
                    "job": "Head Nurse"
                }
            }).as('details')
            
            
            cy.get('@details').its('status')
                     .should('eq', 201)
                       
           cy.get('@details').its('headers').its('content-type')
                     .should('eq', 'application/json; charset=utf-8')

            cy.get('@details').then(   (resp) => {


                expect(resp.body.name).to.eq('Nikki Tan')


                //non functional requirement  ----- 2000 msec
                //expect(resp.)

                expect(resp.duration).to.be.below(2000)
                cy.log(JSON.stringify(resp.body))


            } )
                        
        
        })
    
    
    })




