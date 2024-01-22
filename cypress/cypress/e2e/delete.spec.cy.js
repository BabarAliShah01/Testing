describe('Delete Books Functionality', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3001/home');
  });

  it('Deletes a book successfully', () => {
      cy.get('.delete-button').first().click();
      cy.get('#confirmDeleteButton').click();
      cy.get('.book-list').should('have.length.lessThan', initialBookCount);
  });


  it('Allows user to navigate back after canceling book deletion', () => {
      cy.get('.delete-button').first().click();
      cy.get('#cancelDeleteButton').click();
      cy.get('#backButton').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to Book App');
  });
});


