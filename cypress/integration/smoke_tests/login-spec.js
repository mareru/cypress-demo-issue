describe('Login is successful', function () {
  it('should open login page', function () {
    cy.log('XXX');
    cy.log(Cypress.env());
    cy.visit(Cypress.env('baseUrl'));
  });
});
