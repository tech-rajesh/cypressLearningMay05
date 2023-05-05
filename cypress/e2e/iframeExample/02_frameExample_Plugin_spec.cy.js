

describe('iframe example test scenarios', function(){


    it('iframe test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')


        //plugin
        

       cy.frameLoaded('#mce_0_ifr')

       cy.iframe('#mce_0_ifr').clear().type('Superb !!').type('{ctrl}A')


       cy.get('button[aria-label="Bold"]').click()

       cy.get('button[aria-label="Italic"]').click()






    })


})