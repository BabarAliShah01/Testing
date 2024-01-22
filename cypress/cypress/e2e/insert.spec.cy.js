describe('Store Books Functionality', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3001/insert');
  });

  it('Stores a new book successfully', () => {
      cy.get('#title').type('New Book');
      cy.get('#author').type('New Author');
      cy.get('#genre').type('Fiction');
      cy.get('#storeButton').click();
      cy.url().should('include', '/home');
      cy.contains('New Book by New Author');
  });


  it('Redirects to book details page after successful book entry', () => {
      cy.get('#title').type('Redirect Book');
      cy.get('#author').type('Redirect Author');
      cy.get('#genre').type('Mystery');
      cy.get('#storeButton').click();
      cy.url().should('include', '/book-details');
      cy.contains('Redirect Book by Redirect Author');
  });

  it('Allows user to cancel book entry and navigate back', () => {
      cy.get('#cancelButton').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to Book App');
  });
});
