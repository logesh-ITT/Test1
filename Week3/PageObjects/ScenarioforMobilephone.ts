/// <reference types="cypress" />
class Mobilephones {
  compareMobiles() {
    const comparetheMobiles:string = 'Compare'
    return cy.contains(comparetheMobiles).trigger('mouseover');
  }
  clickTheMobiles() {
    const clickTheMobiles:string = 'div>ul>li:nth-child(11)>ul>li:nth-child(1)>a';
    return cy.get(clickTheMobiles)
  }
  compareMobilesTextbox() {
    const compareMobilesTextbox:string = '#productcompare1';
    return cy.get(compareMobilesTextbox)
  }
  getMobilePhone() {
    const getMobilePhone:string = 'Starts from ₹ 19,499'
    return cy.contains(getMobilePhone)
  }
  compareSecondMobilesTextbox() {
    const compareSecondMobilesTextbox:string = '#productcompare2';
    return cy.get(compareSecondMobilesTextbox)
  }
  getSecondMobilePhone() {
    const getSecondMobilePhone = 'Starts from ₹ 67,500';
    return cy.contains(getSecondMobilePhone)
  }
  compareResult() {
    const compareResult:string = '#compareButton';
    return cy.get(compareResult)
  }
}
export default Mobilephones;
