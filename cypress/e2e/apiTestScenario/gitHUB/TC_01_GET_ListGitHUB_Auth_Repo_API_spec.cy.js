

describe('GitHUB Repo', ()=>{


    var authToken = "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"
    var fetchRepoName = ""
    

    it('List repositories for the authenticated user', () => {
        cy.request({
                method: "GET", 
                url: "https://api.github.com/user/repos",
                // body: 	{
                //     "name": "Nikki Tan",
                //     "job": "Head Nurse"
                // }

                headers: {

                            "Authorization" : "Bearer "+ authToken

                          }

            })
            
            .then((apiresult) => {

                        //cy.log(result)
            
                        expect(apiresult.status).to.eq(200)

                        //var x = apiresult.body


                        expect(apiresult.body[0].full_name).to.eql('edwarddominic30/CypressAutomation')

                        fetchRepoName = apiresult.body[1].name
                        
        
        })
    
    
    })


    it('fetch repo name', ()=>{


        cy.log('RepostoryName: ' + fetchRepoName)
    
    
    })




})