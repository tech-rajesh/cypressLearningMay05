
/// <reference types="cypress"/>

describe('NOP Comm Add Customer', ()=>{


    

    it('add customer ', ()=>{

        
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.viewport(1600,1600)

        cy.get('.button-1').click()

        cy.get('.nav-pills > :nth-child(4) > [href="#"]').click()

        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link').click()

        cy.get('.float-right > .btn-primary').click()


        

        cy.get('#Email').type('demo11@demomail.com')

        cy.get('#Password').type('demo123')


        cy.get('#Gender_Male').check()


        cy.get('.k-picker-wrap > .k-select').type('4/20/2023').then(()=>{


            cy.get('#Email').click()


        })




        cy.get('[name="save"]').click()

        cy.get('.alert').then( (ele)=>{

                
                expect(ele.text()).to.contain('added')
        })




    })



})