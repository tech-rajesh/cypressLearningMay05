/// <reference types="cypress" />



describe('Sreenshot Example 1', ()=> {


    it('verify login', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.xpath('//input[@name="username"]')
        .type('Admin')

        cy.xpath('//input[@name="password"]')
        .type('admin123')

        cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()

        //cy.contains('').click()
        //cy.get('').click()
        //validate url/title


        cy.title().should('contain', 'HRM')

        //cy.title().contains('iphone 14')
        cy.url().should('contain', 'requestPasswordResetCode')
            //take a screenshot


       // cy.wait(1000)
        // cy.get('.oxd-input').click()
        cy.screenshot()

    })


})