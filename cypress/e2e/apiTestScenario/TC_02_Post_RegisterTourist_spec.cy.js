

describe('POST_2', () => {
    it('app2 - dynamically generating the json object', () => {

        



        const requestBody = {
                            tourist_name : Math.random().toString(5).substring(2),
                            //var tourist_email = "kel.test@tesssssssssst.com"
                    
                            tourist_email : Math.random().toString(5).substring(2)+ "@testmail.com",
                    
                            tourist_location : "Coron"

                             }





      cy.request({
        method: 'POST',
        url: 'http://restapi.adequateshop.com/api/Tourist',
        body: requestBody



      }).then((response) => {
        console.log(response.body)
        expect(response.status).to.eq(201) // Verify response status code
        expect(response.body.tourist_name).to.eq(requestBody.tourist_name) // Verify response body tourist_name
        expect(response.body.tourist_email).to.eq(requestBody.tourist_email) // Verify response body tourist_email
        expect(response.body.tourist_location).to.eq(requestBody.tourist_location) // Verify response body tourist_location
      })
    })
  })
