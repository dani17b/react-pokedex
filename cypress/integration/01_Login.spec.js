import Config from "./Config";

describe('01 Login', () => {
  Config.users.forEach(user => {
    it('Login user (' + user.login + ')', () => {
      // Ir a inicio
      cy.visit('/');

      // Introducir login
      cy.get('[type="text"].login__form__input').type(user.login);

      // Introducir password
      cy.get('[type="password"].login__form__input').type(user.password);

      // Click en el boton de login
      cy.get('.login__form__button').click();

      // Opcion alternativa
      // cy.loginUser(user);

      // Verificar que la info del usuario se almacene correctamente en el store de redux
      if (user.isRegistered){
        cy.get('.home').should('be.visible');
        cy.window().its('store').invoke('getState').should('have.keys', ['login', 'home']);
        cy.window().its('store').invoke('getState').its('login.userInfo.login').should('eq', user.login);
      }

    });

    if (user.isRegistered) {
      it('Check user can see homepage (' + user.login + ')', () => {
        // Comprobar que el usuario esta en la pagina de inicio
        cy.get('.home').should('be.visible');
        cy.get('.users > div').should('have.length', user.numFriends);
      });
    } else {
      it('Check user is not registered (' + user.login + ')', () => {
        cy.get('.message').contains('Error al hacer iniciar sesión');
      });
    }
  });
});