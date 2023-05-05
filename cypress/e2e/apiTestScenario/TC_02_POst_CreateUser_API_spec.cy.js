const { wrap } = require("cypress/types/lodash")


describe('Create user', ()=>{



    it.skip('Create user api test', ()=>{


        cy.request( {

            method: "POST",
            url: "https://reqres.in/api/users",
            body: 
                    {
                        name: "Trish",
                        job: "sr.leader"
                    }



        }  )
        .its('status')
        .should('eq', 201)






    })




    it.skip('Create user api test - 2', ()=>{



        let emp_name = "Trish"
        let emp_role = "sr.leader"



        cy.request( {

            method: "POST",
            url: "https://reqres.in/api/users",
            body: 
                    {
                        name: emp_name,
                        job: emp_role
                    }



        }  ).then(  (resp) =>{


                expect(resp.status).to.eq(201)
                expect(resp.body.name).to.eq(emp_name)
                expect(resp.body.job).to.eq(emp_role)


        } ) 
        






    })




    it.only('create user', () => {
        cy.request({
                method: "POST", 
                url: "https://reqres.in/api/users",
                body: 	{
                    "name": "Nikki Tan",
                    "job": "Head Nurse"
                }
            })
            
            .then((apiresult) => {

                        //cy.log(result)
            
                        expect(apiresult.status).to.eq(201)

                        expect(apiresult.body.name).to.contain('Nikki')
                        expect(apiresult.body.job).to.eq('Head Nurse')
                        
                        expect(apiresult.duration).to.be.below(2000)

                        expect(apiresult.body).to.have.property('job', "Head Nurse")

                       

                        
        
        })
    
    
    })




})