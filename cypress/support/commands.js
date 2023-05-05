// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login',(username, password) =>{


//     cy.session([username, password], ()=>{

//         cy.visit('https://admin-demo.nopcommerce.com/')
//         //check pre text of email text field
//         cy.get('input[class^="email"]')
//             .should('have.value', username)
//             .clear()
//             .type(username)
//             .should('have.value', username)
    
//         //check pre text of password text field
//         cy.get('input[type="password"]')
//             .should('have.value', password)
//             .clear()
//             .type(password)
//             .should('have.value', password)
    
//         cy.get('input[id="RememberMe"]').click();
    
//         //click login button
//         cy.get('button[class*="login"]').click();

//     })


    
    


// })




/// <reference types="cypress"/>

/// <reference types="cypress-xpath"/>


require('@4tw/cypress-drag-drop')

require('cypress-iframe');

import 'cypress-file-upload';


// //Custom Method in Cypress
// Cypress.Commands.add('LinkText', function(label) { 


//     cy.get('a').contains(label).click()


// })



Cypress.Commands.add('CustomMethodClickOnLink', (eleText)=>{


    cy.get('a').contains(eleText).click()

})





Cypress.Commands.add('custom_frame', (framelocator) => {  


    return cy.get(framelocator)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)



})






Cypress.Commands.add('customHandleIFrame', function(locatorFrame){



            return cy.get(locatorFrame)
                    .its('0.contentDocument.body')
                    .then(   cy.wrap    )


                    // cy.get(locatorFrame)
                    // .its('0.contentDocument.body')
                    // .then(   () =>  cy.wrap     )




})