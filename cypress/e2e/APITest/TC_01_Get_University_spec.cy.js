

describe('verify API', ()=>{


    it('get university details', ()=>{


        cy.request('GET', 'http://universities.hipolabs.com/search?country=philippines')
        .its('status')
        .should('equal', 200)


    })


})