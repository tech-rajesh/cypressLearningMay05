


class Login {





    //Identification

    txtEmail = 'input#Email'
    // txtPass = 'input#Email'




    //Methods

    enterEmail(emailID){

        cy.get(this.txtEmail).clear().type(emailID)
    }

    enterPass(emailID){

        cy.get(this.txtEmail).clear().type(emailID)
    }
    

    // loginWithUserDetail(email, pass){

    //     this.enterEmail(email)
        

    // }


}


export default Login;