

describe('Multiple File Upload Example', ()=>{


    it.only('file upload test ', ()=>{


        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')


        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('sample.txt')      //take file from fixture



        //validation step

        cy.get('.smart-item-name' , {includeShadowDom: true}).contains('sample.txt')
        


        cy.get('.smart-item-name' , {includeShadowDom: true}).should('have.text', 'sample.txt')

    })



      



})