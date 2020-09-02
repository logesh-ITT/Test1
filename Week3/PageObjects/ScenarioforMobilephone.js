/// <reference types="Cypress" />
class ScenarioforMobilephone {
  CompareMobiles() {
    return cy.contains('Compare').trigger('mouseover'); //mouseover to compare
  }
  ClickTheMobiles() {
    return cy.get('div>ul>li:nth-child(11)>ul>li:nth-child(1)>a');
  }
  CompareMobilesTextbox() {
    return cy.get('#productcompare1');
  }
  GetMobilePhone() {
    return cy.contains('Starts from ₹ 21,499')
  }
  CompareSecondMobilesTextbox() {
    return cy.get('#productcompare2')
  }
  GetSecondMobilePhone() {
    return cy.get('.txtp>.vinfo')
  }
  CompareResult() {
    return cy.get('#compareButton')
  }
}
export default ScenarioforMobilephone;