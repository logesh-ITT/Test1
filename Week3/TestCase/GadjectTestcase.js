/// <reference types="Cypress" />
import ScenarioforMobilephone from '../PageObjects/ScenarioforMobilephone';
import Scenarioforlaptop from '../PageObjects/Scenarioforlaptop';

describe("Testcases", function () {
    beforeEach(function () {
        cy.visit('https://gadgets.ndtv.com/'); //Homepage
        cy.get('div > div.pricee-store > picture > img').should('be.visible'); //validate image visibe
    })

    it('Verify Laptops in ProductFinder', function () {
        const laptop = new Scenarioforlaptop();
        laptop.verifyLaptops()
        cy.wait(5000);
        cy.title().should('eq', 'Dell Inspiron 5378 Price (01 Sep 2020) Specification & Reviews । Dell Laptops');

    })
    it('Compare Mobile phones', function () {
        const Mobile = new ScenarioforMobilephone();
        Mobile.compareMobiles();
        cy.title().should('eq','Compare Samsung Galaxy M31s vs Apple iPhone X (256GB) Price, Specs, Ratings');


    })

})
