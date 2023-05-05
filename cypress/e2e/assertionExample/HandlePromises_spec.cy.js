
describe('Assertion Example', ()=>{


    it('Implicit Example', ()=>{


         cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')   

         cy.get('#Email').clear().type('admin@yourstore.com')

         cy.get('#Password').clear().type('admin')

         cy.get('.button-1').click()



        //handle promises
        //get the text of specific element and validate
        cy.get('div.content-header>h1').then(function(ele){


                let actualText = ele.text()
                expect(actualText).to.contain('Dash')

        })







         cy.get('.mt-2 > ul > li').should('have.length.above', 8)
       

         cy.get('.mt-2 > ul > li').find('[href*="Activity"]').should('have.length', 2)


    })


})