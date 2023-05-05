

describe('XPATH test', ()=>{


    it('perform action using xpath', ()=>{


        cy.visit('https://www.amazon.in/')
        //cy.xpath('//input[@id="twotabsearchtextbox"]').type('iphone 14')

        cy.get('#pzj_5JggTTAIa0RB6S_Diw > .a-cardui-footer > .a-link-normal').click()

    })


    

})