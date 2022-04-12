import Config from './Config';
const user = Config.users[0];

describe('02 Home', () => {

  before(() => {
      cy.loginUser(user);
  })

  it('Check user can see homepage (' + user.login + ')', () => {
    // Comprobar que el usuario esta en la pagina de inicio
    cy.get('.home').should('be.visible');
    cy.get('.users > div').should('have.length', user.numFriends);

    // Seleccionar el penultimo amigo
    const friendId = user.numFriends - 1;
    cy.get('.users > div:nth-child(' + friendId + ')').click();

    // Comprobar que sale la ruta con la info del amigo (Por url)
    cy.url().should('include', '/friend/' + friendId)

    // Comprobar que sale la info del amigo
    cy.get('.friend_info').contains('Detalles de amigo ' + friendId);

    // Volver a la home y comprobar que sale la home
    cy.get('.friend_info').click();
    cy.get('.home').should('be.visible');
  });
});
