

describe('Multiple File Upload Example', ()=>{


    it.only('file upload test ', ()=>{


        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')


        cy.get('#filesToUpload').attachFile(["sample.txt", "sampleDemo.pdf" , "Playwright_Course_Overview.pdf"])        //take file from fixture


        


    })



    it.skip('checkbox ', ()=>{


        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')


        cy.get('[type="checkbox"]').check(["Car", "Bike"])        //take file from fixture


        


    })


    



})