/// <reference types="Cypress" />
class ScenarioForLaptop {
    verifyLaptops() {
        cy.contains('Product Finder').trigger('mouseover'); //mouseover to product finder
        cy.get('div>ul>li:nth-child(10)>ul>li:nth-child(3)>a').click({ force: true }); //click the laptop button
        cy.title().should('eq', 'Laptops: Latest & Best Laptops online 2020, Laptop Finder with Price'); //validate the title
        cy.get('#brand_Dell').check().should('be.checked'); //click the checkbox
        cy.get('div:nth-child(1)>div._lpdscn>h3>a').first().click({ force: true }); //click the dell laptop
        return this
    }
}
export default ScenarioForLaptop;

