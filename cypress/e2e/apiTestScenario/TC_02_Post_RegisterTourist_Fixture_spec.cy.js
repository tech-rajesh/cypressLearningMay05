

describe('POST_2', () => {
    
  
  it('app2 - dynamically generating the json object', () => {

        
      cy.fixture('touristData').then(  (apidata) =>{



           const requestBody = apidata



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
          
          
          
            // //validate property
            expect(response.body).has.property('tourist_email', requestBody.tourist_email)
            expect(response.body).to.have.property('tourist_email', requestBody.tourist_email)
          
          
          })




      } )




      
    })
  })
