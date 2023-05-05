/// <reference types="cypress" />



describe('XPATH Example', ()=> {


    it('verify serach item', ()=>{

        cy.visit('https://www.amazon.in/')

       //click on Electronics devices
        cy.xpath("//h2[contains(text(),'Baby products & toys | Amazon Brands')]/parent::div/following-sibling::div[contains(@class,'foo')]/child::a").click()




    })


})