
describe('JQuery Example Sceanrio', ()=>{



    beforeEach(()=>{

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')


    })


    it('JQuery Example', ()=>{


        
       //sync call ----- running in sequesntially
       let txtEmail_JQuery =  Cypress.$('#Email')


       if(txtEmail_JQuery.length){


            cy.log(txtEmail_JQuery.attr('name'))

       }

       


    })


    it('Without JQuery Example',  ()=>{


         

        //Cypress querying an element and assigining to const will not work
        cy.get('#Email').then( (ele)=>{


            cy.log(`Without JQuery : ${ele.attr('name')}`)          //Email

        })

        




        }  )




        



   })


