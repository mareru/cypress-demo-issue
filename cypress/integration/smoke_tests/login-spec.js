describe('Login is successful', function () {
  it('should open login page', function () {
    cy.log('XXX');
    cy.log(Cypress.config('baseUrl'));
    cy.visit(Cypress.config('baseUrl'));
  });
});
