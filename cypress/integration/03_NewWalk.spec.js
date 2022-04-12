import Config from './Config';
const user = Config.users[0];

describe('03 New walk', () => {
  before(() => {
    cy.loginUser(user);
  });

  it('Register new walk', () => {
    // Comprobar que el usuario esta en la pagina de inicio
    cy.get('.home').should('be.visible');

    cy.get('.button').click();

    cy.get('[type="number"]').type('10.3');

    cy.get('[type="time"]').type('20:05');

    cy.get('[type="date"]').type('2020-05-03');

    cy.get('.new_walk__form__button').click();

    // Comprobar que sale la home
    cy.get('.home').should('be.visible');
  });
});
