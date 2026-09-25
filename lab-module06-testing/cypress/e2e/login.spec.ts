describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should focus user input when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').click();

    // Assert
    cy.findByLabelText('Usuario *').should('have.focus');
  });

  it('should show a floating message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert')
      .contains('Usuario y/o password no válidos')
      .should('be.visible');
  });

  it('should navigate to submodule-list url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:5173/#/submodule-list');
    cy.location('hash').should('equal', '#/submodule-list');
  });
});
