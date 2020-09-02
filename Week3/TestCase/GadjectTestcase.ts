import ScenarioforMobilephone from '../PageObjects/ScenarioforMobilephone';
import Scenarioforlaptop from '../PageObjects/Scenarioforlaptop';
describe("NdtvGadjectsTestcases", function () {
    beforeEach(function () {
        cy.visit('https://gadgets.ndtv.com/'); //Homepage 
    });
    it('Verify Laptops in ProductFinder', function () { 
        const laptop = new Scenarioforlaptop();
        laptop.productFinderLaptops(); //mouseover to product finder
        laptop.laptoplink().click({ force: true }); //click the laptop button
        cy.title().should('eq', 'Laptops: Latest & Best Laptops online 2020, Laptop Finder with Price'); //validate the title
        laptop.brandCheckBox().check().should('be.checked'); //click the checkbox
        laptop.dellLaptop().first().click({ force: true }); //click the dell laptop
        cy.title().should('eq', 'Dell Inspiron 5378 Price (02 Sep 2020) Specification & Reviews । Dell Laptops');
    });
    it('Compare Mobile phones', function () {
        const Mobile = new ScenarioforMobilephone();
        Mobile.compareMobiles(); //mouseover to compare
        Mobile.clickTheMobiles().should('be.visible').click({ force: true }); //click the mobiles button
        Mobile.compareMobilesTextbox().should('be.visible').type('Samsung Galaxy M31s') //type in textbox
        Mobile.getMobilePhone().first().click() //getting that mobilephone
        Mobile.compareSecondMobilesTextbox().should('be.visible').type('apple iphone x') //type in textbox
        Mobile.getSecondMobilePhone().last().click() //getting that mobilephone
        Mobile.compareResult().should('be.visible').click() //click that compare button
        cy.title().should('eq', 'Compare Samsung Galaxy M31s vs Apple iPhone X Price, Specs, Ratings');
    });

});
