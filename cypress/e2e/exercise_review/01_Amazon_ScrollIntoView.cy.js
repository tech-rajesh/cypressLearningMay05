/// <reference types="cypress"/>

describe('ScrollIntoView test', ()=>{


    it('ScrollIntoView example', ()=>{


        cy.visit('https://www.amazon.in/')
        
        
        cy.contains('Up to 40% off | Daily essentials')
            .scrollIntoView()

    })


    

})