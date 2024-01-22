describe('Homepage Functionality', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3001/home');
  });

  it('Displays a list of books on the homepage', () => {
      cy.get('.book-list').should('have.length.greaterThan', 0);
  });

  it('Navigates to a specific book details page', () => {
      cy.get('.book-link').first().click();
      cy.url().should('include', '/book-details');
      cy.contains('Book Details');
  });

});