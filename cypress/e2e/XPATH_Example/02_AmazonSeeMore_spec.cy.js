/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

       // cy.xpath("//h2[contains(text(),'Baby products & toys | Amazon Brands')]/parent::div/parent::div/child::div[contains(@class,'foot')]/child::a[text()='See more']").click()


       //click on Electronics devices
        cy.xpath("//h2[contains(text(),'Calling Smartwatch starts')]/parent::div/parent::div/child::div[contains(@class, 'foot')]/child::a[text()='Shop Now']").click()



        //cy.title().should('contain', 'Computers')


    })


})