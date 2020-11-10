/// <reference types="cypress" />
class Mobilephones {
  public compareMobiles(): Cypress.Chainable<any> {
    const comparetheMobiles: string = 'Compare'
    return cy.contains(comparetheMobiles);
  }
  public clickTheMobiles(): Cypress.Chainable<any> {
    const clickTheMobiles: string = 'div>ul>li:nth-child(11)>ul>li:nth-child(1)>a';
    return cy.get(clickTheMobiles)
  }
  public compareMobilesTextbox(): Cypress.Chainable<any> {
    const compareMobilesTextbox: string = '#productcompare1';
    return cy.get(compareMobilesTextbox)
  }
  public getMobilePhone(): Cypress.Chainable<any> {
    const getMobilePhone: string = 'Starts from ₹ 19,499'
    return cy.contains(getMobilePhone)
  }
  public compareSecondMobilesTextbox(): Cypress.Chainable<any> {
    const compareSecondMobilesTextbox: string = '#productcompare2';
    return cy.get(compareSecondMobilesTextbox)
  }
  public getSecondMobilePhone(): Cypress.Chainable<any> {
    const getSecondMobilePhone = 'Starts from ₹ 67,500';
    return cy.contains(getSecondMobilePhone)
  }
  public compareResult(): Cypress.Chainable<any> {
    const compareResult: string = '#compareButton';
    return cy.get(compareResult)
  }
}
export default Mobilephones;