import Scenarioforlaptop from '../PageObjects/Scenarioforlaptop';
describe("NdtvGadjectsTestcases", function () {
    before(function () {
        cy.visit('/') //Homepage 
    });
    it('Verify Laptops in ProductFinder', function () { 
        const laptop = new Scenarioforlaptop();
        laptop.productFinderLaptops(); //mouseover to product finder
        laptop.laptoplink().click({ force: true }); //click the laptop button
        cy.title().should('eq', 'Laptops: Latest & Best Laptops online 2020, Laptop Finder with Price'); //validate the title
        laptop.brandCheckBox().check().should('be.checked'); //click the checkbox
        laptop.asusLaptop().first().click({ force: true }); //click the dell laptop
        cy.title().should('eq', 'Asus ZenBook Flip 14 Price (03 Sep 2020) Specification & Reviews । Asus Laptops');
    });
});
