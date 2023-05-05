

describe('nop Comm', ()=>{



    before(()=>{


            cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

            cy.xpath("//button[@type='submit']").click();

            cy.visit('https://admin-demo.nopcommerce.com/Admin/Product/Create')


    })



    it('Add Product', () => {

        





        cy.xpath('//textarea[@id="ShortDescription"]').type('Short description sample')

        cy.frameLoaded('#FullDescription_ifr')

        cy.iframe('#FullDescription_ifr').type('Long description with iFrame plugin use.')

        // productPage.clickSave()

        // cy.xpath('//button[@class="fa toggle-icon fa-plus"]').click()

        // cy.xpath('//span[contains(text(), "k-numeric-wrap k-state-default")]').click()

        cy.xpath('//input[@name="Price"]/preceding-sibling::input').click()

        cy.xpath('//input[@name="Price"]').clear().type('100', {force: true})

        cy.get('#IsTaxExempt').check()

        //cy.wait(1000)

    })



})