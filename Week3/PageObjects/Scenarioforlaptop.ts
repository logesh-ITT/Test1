class laptops {
    productFinderLaptops() {
        const productFinderLaptops:string = 'Product Finder'
        return cy.contains(productFinderLaptops).trigger('mouseover');
    }
    laptoplink() {
        const laptoplink:string = 'div>ul>li:nth-child(10)>ul>li:nth-child(3)>a';
        return cy.get(laptoplink)
    }
    brandCheckBox() {
        const brandCheckBox:string = '#brand_Asus';
        return cy.get(brandCheckBox)
    }
    asusLaptop() {
        const asusLaptop:string = 'div:nth-child(1) > div._lpdscn > h3 > a'
        return cy.get(asusLaptop)
    }
}
export default laptops;
