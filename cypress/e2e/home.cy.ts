describe('The Home Page', () => {
  it('Should display products from the mock API', () => {

    cy.intercept('GET', 'https://fakestoreapi.com/products', { fixture: 'products' }).as('getProducts');

    cy.visit('/');

    cy.wait('@getProducts');

    cy.get('[data-test="product-list"]').should('have.length', 3);
  });
});