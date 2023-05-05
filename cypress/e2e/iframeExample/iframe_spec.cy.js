

describe('IFRAME example', ()=>{


    it.skip('iframe test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')



        const my_iframe = cy.get('#mce_0_ifr')
                                .its('0.contentDocument.body')
                                .should('be.visible')
                                .then( cy.wrap )


        my_iframe.clear().type('Welcome you all in today session !!').type('{ctrl}A')
        




        cy.get('button[title="Bold"]').click()


    })




    it.only('iframe test2', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')



        const my_iframe = cy.custom_frame('#mce_0_ifr')


        my_iframe.clear().type('Welcome you all in today session !!').type('{ctrl}A')
        




        cy.get('button[title="Bold"]').click()


    })

})