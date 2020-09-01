/// <reference types="Cypress" />
class ScenarioforMobilephone {

  compareMobiles() {

    cy.contains('Compare').trigger('mouseover'); //mouseover to compare
    cy.get('div>ul>li:nth-child(11)>ul>li:nth-child(1)>a').should('be.visible').click({ force: true }); //click the mobiles button
    cy.get('#productcompare1').should('be.visible').type('Samsung Galaxy M31s') //type in textbox
    cy.wait(12000);
    cy.contains('Starts from ₹ 19,499').first().click() //getting that mobilephone
    cy.get('#productcompare2').should('be.visible').type('apple iphone x') //type in textbox
    cy.wait(12000);
    cy.get('.txtp>.vinfo').last().click() //getting that mobilephone
    cy.get('#compareButton').should('be.visible').click() //click that compare button
    cy.wait(5000);
    return this
  }
}
export default ScenarioforMobilephone;









