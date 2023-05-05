
/// <reference types="cypress"/>


describe('dropdown example - select tag', function(){


    it('verify dropdown', ()=>{

        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')



        //cy.get('').select('India')  //------ select single value
        
        //cy.get('select[name="FromLB"]').select(['India', 'Italy']) 

        //cy.get('select[name="FromLB"]').select([0, 2, 'Spain']) 

        cy.get('select[name="FromLB"]').select([0, 2, 'Spain'], {force: true}) 


    })



})