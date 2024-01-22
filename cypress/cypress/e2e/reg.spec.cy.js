describe('Registration Functionality', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3001/register');
  });

  it('Registers a new user successfully', () => {
      cy.get('#name').type('Test User');
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('Test1234');
      cy.get('#confirmPassword').type('Test1234');
      cy.get('#registerButton').click();
      cy.url().should('include', '/home');
      cy.contains('Welcome to Book App');
  });

  it('Displays error message on existing email during registration', () => {
      cy.get('#name').type('Another Test User');
      cy.get('#email').type('testuser@example.com'); // Existing email
      cy.get('#password').type('AnotherTest1234');
      cy.get('#confirmPassword').type('AnotherTest1234');
      cy.get('#registerButton').click();
      cy.contains('Email address is already in use');
  });


  it('Redirects to login page after successful registration', () => {
      cy.get('#name').type('Success User');
      cy.get('#email').type('successuser@example.com');
      cy.get('#password').type('SuccessTest1234');
      cy.get('#registerButton').click();
      cy.url().should('include', '/login');
      cy.contains('Successfully registered! Please log in.');
  });
});


