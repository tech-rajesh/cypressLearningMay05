/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        
       // cy.xpath('//input[starts-with(@placeholder,"Search")]').type('iphone 14 pro')

        //cy.xpath("//span[text()='right click me']").trigger('contextmenu')


        //cy.xpath("//span[text()='right click me']")

        // cy.get('body#authentication>span').rightclick()


        cy.get('#authentication > button').dblclick()


        cy.on('window:alert', ( alert) => {

            expect(alert).to.contains('You double clicked me.. Thank You')

        })


    })


})