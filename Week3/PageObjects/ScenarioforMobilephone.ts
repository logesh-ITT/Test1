class Mobilephones {
  compareMobiles() {
    return cy.contains('Compare').trigger('mouseover'); //mouseover to compare
  }
  clickTheMobiles() {
    return cy.get('div>ul>li:nth-child(11)>ul>li:nth-child(1)>a');
  }
  compareMobilesTextbox() {
    return cy.get('#productcompare1');
  }
  getMobilePhone() {
    return cy.contains('Starts from ₹ 19,499')
  }
  compareSecondMobilesTextbox() {
    return cy.get('#productcompare2')
  }
  getSecondMobilePhone() {
    return cy.contains('Starts from ₹ 67,500')
  }
  compareResult() {
    return cy.get('#compareButton')
  }
}
export default Mobilephones;
