

describe('iframe example test scenarios', function(){


    it('iframe test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')



       // const myFrame = cy.custom_frame('#mce_0_ifr')
            
        const myFrame = cy.customHandleIFrame('#mce_0_ifr')

        myFrame.clear().type("Kudos to you all, for all your efforts !!")



    })


})