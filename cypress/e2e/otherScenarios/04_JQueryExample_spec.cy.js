const { beforeEach } = require("mocha")

describe('JQuery Example', ()=>{

    beforeEach(function(){

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    })


    it('JQuery Test1', ()=>{


        // Search element and assign to a constant
        //It will work perfectly fine, as the jQuery's $() function will return the query's result synchronously.

        const element = Cypress.$('.email');

        if (element.length) {
            cy.log(element.attr('name'))
          }
        

        //
        // cy.log(element.length)


    })

    it('Without JQuery Test1', ()=>{


        // Cypress querying an element and assigning to constant will not work
          cy.get('.email')
                .then((element) => { 
                // this code will never execute if the element is not found
                cy.log(element.attr('name'))
            
            
            })


    })


})