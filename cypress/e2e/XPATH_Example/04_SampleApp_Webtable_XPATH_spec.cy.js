/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.hyrtutorials.com/p/add-padding-to-containers.html')

       //click on Electronics devices
       // cy.xpath("//td[text()='Helen Bennett']/preceding-sibling::td/input").click()


        //cy.xpath("//td[text()='Roland Mendel']/preceding-sibling::td/input").check()

        cy.title().should('contain', 'XPath')


    })


})