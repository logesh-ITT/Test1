/// <reference types="Cypress" />
import ScenarioforMobilephone from '../PageObjects/ScenarioForMobilePhone';
import Scenarioforlaptop from '../PageObjects/ScenarioForLaptop';

describe("Testcases", function () {
    beforeEach(function () {
        cy.visit('https://gadgets.ndtv.com/'); //Homepage
        cy.get('div > div.pricee-store > picture > img').should('be.visible'); //validate image visibe
    });
    it('Verify Laptops in ProductFinder', function () {
        const laptop = new ScenarioForLaptop();
        laptop.verifyLaptops()
        cy.wait(5000);s
        cy.title().should('eq', 'Dell Inspiron 5378 Price (01 Sep 2020) Specification & Reviews । Dell Laptops');
    });
    it('Compare Mobile phones', function () {
        const Mobile = new ScenarioForMobilePhone();
        Mobile.compareMobiles();
        cy.title().should('eq', 'Compare Samsung Galaxy M31s vs Apple iPhone X (256GB) Price, Specs, Ratings');
    });

});
