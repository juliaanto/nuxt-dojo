describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Clicking "Categories" navigates to a Category chart page', () => {
    cy.contains('Categories').click()

    cy.url().should('include', '/categories')
  })

  it('Clicking "Home" navigates to a Home page', () => {
    cy.contains('Home').click()

    cy.url().should('include', '/')
  })
})