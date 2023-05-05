

describe('Create repo', ()=>{


   var authToken = ""

    
    it.only('create repo', () => {
        cy.request({
                method: "POST", 

                


                url: "https://api.github.com/user/repos",
                body: 	{
                    "name": ""
                },
                headers: {

                            "Content-Type" : "application/json",
                            "Authorization": "Bearer " + authToken
                        }
                
            })
            
            .then((apiresult) => {

                        //cy.log(result)
            
                        expect(apiresult.status).to.eq(201)

                        // expect(apiresult.body.name).to.contain('Nikki')
                        // expect(apiresult.body.job).to.eq('Head Nurse')
        
        })
    
    
    })




})