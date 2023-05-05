
describe('Assertion Example', ()=>{


    it.skip('Implicit Example', ()=>{


         cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')   

         //validation on URL

         //app1
         cy.url().should('include', 'nopcommerce')          //nopcommerce
         cy.url().should('eq', 'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
         cy.url().should('contain', 'nopcommerce')          //nopcommerce
         cy.url().should('not.contain', 'google')           //negative test



        //app2
        cy.url().should('include', 'nopcommerce')
            .and('eq', 'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
            .and('contain', 'nopcommerce')
            .and('not.contain', 'google')


            
        cy.get('#Email')
            .should('be.visible')
            .and('exist')

        
        cy.get('#RememberMe')
            .should('have.attr', 'type')
            //.and('have.text', 'Remember me?')



        cy.get('input').should('have.length.above', 2)



       


    })


    it.only('Explicit Example  ---  expect/assert',  ()=>{


        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')   

        

        //handle promises
        cy.title().then(   (myappTitle) => {


            cy.log(`Application Title : ${myappTitle}`)


            //BDD
            expect(myappTitle).to.equal('Your store. Login')
            expect(myappTitle).to.not.equal('Dashboard')        //negative validation



            //TDD
            assert.equal(myappTitle, 'Your store. Login')



        }  )




        

        // console.log('before------------')
        // cy.log(`Application Title : ${applicationTitle}`)
        // console.log('after----------')

        // cy.log('after section')


   })


})