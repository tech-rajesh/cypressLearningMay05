class Homepage
{
    add_first_product='#add-to-cart-sauce-labs-backpack'
    shopping_cart='.shopping_cart_badge'
    add_last_product='button[id="add-to-cart-test.allthethings()-t-shirt-(red)'
    remove_first_product='#remove-sauce-labs-backpack'
    filter_select='.product_sort_container'
    item_price=':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price'

    addfirstproducts()
    {
       cy.get(this.add_first_product).click()
    }

    addlastproducts()
    {
       cy.get(this.add_last_product).click()
    }
    removeproducts()
    {
        cy.get(this.remove_first_product).click()
    }
   
    clickonshoppingcart()
    {
        cy.get(this.shopping_cart).click()
    }
   
    verifycartvalue(value)
    {
        cy.get(this.shopping_cart).should('have.text', value)
    }

    changefiltervalue(value)
    {
        cy.get(this.filter_select).select(value)
    }

    verifypricesortedproperly(value)
    {
        cy.get(this.item_price).should('have.text',value)
        
    }
}

export default Homepage