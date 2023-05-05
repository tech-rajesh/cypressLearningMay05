/// <reference types="cypress" />



describe('Action Trigger Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        //cy.xpath("//*[@type='text']").type('iphone 14')






        //identification
        
        //right click button
        //span[text()='right click me']

        //span[contains(text(),'ht click')]
        

        //app1


        //contextmenu   ------ right click operation
        //cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu')

        

        //using xpath
        //cy.xpath("//span[contains(text(),'ht click')]").trigger('contextmenu')


        //app2
        //cy.get("span.context-menu-one.btn.btn-neutral").rightclick()

       // cy.xpath("//button[contains(text(),'-Click')]").doubleclick()

    //using xpath
        cy.get('button[ondblclick="myFunction()"]').trigger('dblclick')


        //alert handle

        cy.on('window:alert', function(alert){


            expect(alert).to.contain('You double clicked me.. Thank You..')


        })



    })


    


})