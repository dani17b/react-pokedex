import Config from './Config';
const user = Config.users[0];

describe('04 Walk info', () => {
  before(() => {
    cy.loginUser(user);
  });

  it('See walk info', () => {
    // Comprobar que el usuario esta en la pagina de inicio
    cy.get('.home').should('be.visible');

    cy.get('.home__list > div')
      .first()
      .click();
  });
});
