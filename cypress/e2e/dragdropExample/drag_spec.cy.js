



describe('Drag drop - plugin', ()=>{


    it('drag drop test', ()=>{


        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')



        cy.get('#box6').should('be.visible')            //Rome
        cy.get('#box106').should('be.visible')          //Italy



        //source ------ target

        cy.get('#box6').drag('#box106', {force: true})


      


    })


})