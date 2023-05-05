class YourCartPage
{
     
    buttonremove='button[name="continue-shopping"]'
    buttoncontinueshopping='button[name="continue-shopping"]'
    addeditemname='.inventory_item_name'

    clickremovebutton()
    {
     cy.get(this.buttoncontinueshopping).click();
    }

    clickcontinueshoppingbutton()
    {
     cy.get(this.buttoncontinueshopping).click();
    }

    verifyaddedproduct()
    {
        cy.get(this.addeditemname).should('have.text','Test.allTheThings() T-Shirt (Red)')
    }
  

}

export default YourCartPage