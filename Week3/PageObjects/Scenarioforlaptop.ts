class laptops {
    public productFinderLaptops(): Cypress.Chainable<any> {
        const productFinderLaptops: string = 'Product Finder'
        return cy.contains(productFinderLaptops);
    }
    public laptoplink(): Cypress.Chainable<any> {
        const laptoplink: string = 'div>ul>li:nth-child(10)>ul>li:nth-child(3)>a';
        return cy.get(laptoplink)
    }
    public brandCheckBox(): Cypress.Chainable<any> {
        const brandCheckBox: string = '#brand_Asus';
        return cy.get(brandCheckBox)
    }
    public asusLaptop(): Cypress.Chainable<any> {
        const asusLaptop: string = 'Asus VivoBook Ultra K14 (K413)'
        return cy.contains(asusLaptop)
    }
}
export default laptops;
