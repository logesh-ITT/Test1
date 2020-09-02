/// <reference types="Cypress" />
class Scenarioforlaptop {
    productFinderLaptops() {
        return cy.contains('Product Finder').trigger('mouseover');
    }
    Laptoplink() {
        return cy.get('div>ul>li:nth-child(10)>ul>li:nth-child(3)>a');
    }
    BrandCheckBox() {
        return cy.get('#brand_Dell');
    }
    DellLaptop() {
        return cy.get('div:nth-child(1)>div._lpdscn>h3>a');
    }
}
export default Scenarioforlaptop;