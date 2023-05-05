


describe('NOP Comm App', function(){


    it('Perfrom Action on LinkText', ()=>{


        cy.visit('https://demo.nopcommerce.com/')

        //cy.contains('Apple MacBook Pro 13-inch').click()

        //cy.get('a').contains('Apple MacBook Pro 13-inch').click()


        //calling custom method
        // cy.LinkText('Apple MacBook Pro 13-inch')

        // cy.LinkText('Build your own computer')

        // cy.url().should('eq', 'https://demo.nopcommerce.com/apple-macbook-pro-13-inch')



        cy.CustomMethodClickOnLink('Virtual Gift Card')




    })



})