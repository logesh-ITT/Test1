import { createYield } from "typescript";
class laptops {
    productFinderLaptops() {
        return cy.contains('Product Finder').trigger('mouseover');
    }
    laptoplink() {
        return cy.get('div>ul>li:nth-child(10)>ul>li:nth-child(3)>a');
    }
    brandCheckBox() {
        return cy.get('#brand_Dell');
    }
    dellLaptop() {
        return cy.get('div:nth-child(1)>div._lpdscn>h3>a');
    }
}
export default laptops;
 