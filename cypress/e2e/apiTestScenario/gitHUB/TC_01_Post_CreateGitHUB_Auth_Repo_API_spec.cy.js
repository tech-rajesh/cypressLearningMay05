

describe('GitHUB Repo', ()=>{


    var authToken = ""
    var fetchRepoName = ""
    var createRepo = "cypressAutomationMayTemp4"

    it('List repositories for the authenticated user', () => {
        cy.request({
                method: "POST", 
                url: "https://api.github.com/user/repos",
                
                
                body: 	{
                    "name": createRepo
                },

                
                headers: {

                            "Authorization" : "Bearer "+ authToken,
                            "Content-Type": "application/json"

                          }

            })
            
            .then((apiresult) => {

                        //cy.log(result)
            
                        expect(apiresult.status).to.eq(201)
                        //expect(apiresult.headers(''))
                        //var x = apiresult.body


                        
                        
        
        })
    
    
    })






})