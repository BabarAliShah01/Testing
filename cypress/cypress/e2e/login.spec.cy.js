describe('Login Functionality', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3001/login');
  });

  it('Logs in with valid credentials', () => {
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('testpassword');
      cy.get('#loginButton').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to Book App');
  });

  it('Displays error message on invalid login', () => {
      cy.get('#email').type('invaliduser@example.com');
      cy.get('#password').type('invalidpassword');
      cy.get('#loginButton').click();
      cy.contains('Invalid email or password');
  });


  it('Displays error message for password recovery with invalid email', () => {
      // Assuming you have a password recovery form with fields: email and recoverButton
      cy.get('#email').type('invalidemail@example.com');
      cy.get('#recoverButton').click();
      cy.contains('Email not found. Please check your email address.');
  });

});

