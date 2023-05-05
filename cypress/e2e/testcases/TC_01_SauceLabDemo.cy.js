import Loginpage from "..//pages/Loginpage"
import Homepage from "..//pages/Homepage"
import YourCartPage from "..//pages/YourCartPage"

const loginpage = new Loginpage
const homepage = new Homepage
const yourcartpage = new YourCartPage

describe('Sauce Lab Assignment',()=>{

    
    before(()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.fixture('login').then( function (logindetails) {

            this.logindetails = logindetails;
        })
        

    })
    
    it('TC_01_SauceLabDemo',function (){
        cy.title().should('eq',this.logindetails.title)
        loginpage.enterusername(this.logindetails.username)
        loginpage.enterpassword(this.logindetails.password)
        loginpage.verifyloginbuttontext()
        loginpage.clickLogin()
        homepage.addfirstproducts()
        homepage.verifycartvalue(this.logindetails.firsttimecartvalue)
        homepage.addlastproducts()
        homepage.verifycartvalue(this.logindetails.secondtimecartvalue)
        homepage.removeproducts()
        homepage.verifycartvalue(this.logindetails.firsttimecartvalue)
        homepage.clickonshoppingcart()
        yourcartpage.verifyaddedproduct()
        yourcartpage.clickcontinueshoppingbutton()
        homepage.changefiltervalue(this.logindetails.filtervalue)
        homepage.verifypricesortedproperly(this.logindetails.sortfirstprice)
    })



   

})