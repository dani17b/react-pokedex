import Config from './Config';
const user = Config.users[0];

describe('01 Home', () => {

  before(() => {
      cy.loadHome(user);
  })

  it('Check user can see homepage (' + user.login + ')', () => {
    // Iniciar busqueda
    cy.get('.home__search').type('pik');

    // Ver si sale el resultado esperado
    cy.get('[data-id="0"] > [data-field="name"]').contains('pikachu');

    // Seleccionar el elemento
    cy.get('[data-id="0"] > [data-field="name"]').click();
  });
});
