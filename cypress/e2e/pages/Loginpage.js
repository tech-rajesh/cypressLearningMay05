class Login
{
     // Verify the title as Swag Labs
      // Verify the login button text is capitalized
     // Login with standard_user & secret_sauce

      txtUserName= 'input[name="user-name"]'
      txtPassword='input[name="password"]'
      buttonLogin='input[name="login-button"]'
      titlePage='Swag Labs'
      

      enterusername(user)
      {
       cy.get(this.txtUserName).type(user)
      }
   
      enterpassword(password)
      {
       cy.get(this.txtPassword).type(password)
      }
   
      clickLogin()
      {
       cy.get(this.buttonLogin).click();
      }
   
      verifyloginbuttontext()
      {
            cy.get(this.buttonLogin).should('have.css','text-transform','uppercase')
      }

}

export default Login