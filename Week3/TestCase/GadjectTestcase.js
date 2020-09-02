/// <reference types="Cypress" />
import ScenarioforMobilephone from '../PageObjects/ScenarioforMobilephone';
import Scenarioforlaptop from '../PageObjects/Scenarioforlaptop';

describe("Testcases", function () {
    beforeEach(function () {
        cy.visit('https://gadgets.ndtv.com/'); //Homepage
    })
    it('Verify Laptops in ProductFinder', function () {
        const laptop = new Scenarioforlaptop();
        laptop.productFinderLaptops(); //mouseover to product finder
        laptop.Laptoplink().click({ force: true }); //click the laptop button
        cy.title().should('eq', 'Laptops: Latest & Best Laptops online 2020, Laptop Finder with Price'); //validate the title
        laptop.BrandCheckBox().check().should('be.checked'); //click the checkbox
        laptop.DellLaptop().first().click({ force: true }); //click the dell laptop
        cy.title().should('eq', 'Dell Inspiron 5378 Price (01 Sep 2020) Specification & Reviews । Dell Laptops');
    })
    it('Compare Mobile phones', function () {
        const Mobile = new ScenarioforMobilephone();
        Mobile.CompareMobiles(); //mouseover to compare
        Mobile.ClickTheMobiles().should('be.visible').click({ force: true }); //click the mobiles button
        Mobile.CompareMobilesTextbox().should('be.visible').type('Samsung Galaxy M31s') //type in textbox
        Mobile.GetMobilePhone().first().click() //getting that mobilephone
        Mobile.CompareSecondMobilesTextbox().should('be.visible').type('apple iphone x') //type in textbox
        Mobile.GetSecondMobilePhone().last().click() //getting that mobilephone
        Mobile.CompareResult().should('be.visible').click() //click that compare button
        cy.title().should('eq', 'Compare Samsung Galaxy M31s vs Apple iPhone X (256GB) Price, Specs, Ratings');
    })

})
