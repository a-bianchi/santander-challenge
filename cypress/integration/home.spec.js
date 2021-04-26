/* global describe it cy */

describe('Home Login', () => {
    it('displays the message fail login', () => {
        const username = 'empty';
        const password = 'empty';

        cy.visit('http://localhost:3000');

        cy.get('form[data-test="FormLogin"]');

        cy.get('input[name="username"]').type(username);

        cy.get('input[name="password"]').type(password);

        cy.get('[data-test="SubmitLogin"]').click();

        cy.get('div[data-test="errorMessage"]');

        cy.contains('Las credenciales ingresadas no son validas' || 'The credentials entered are not valid');
    });

    it('displays the message fail username and password', () => {
        const username = 'empty';
        const password = 'empty';

        cy.visit('http://localhost:3000');

        cy.get('form[data-test="FormLogin"]');

        cy.get('[data-test="SubmitLogin"]').click();

        cy.get('div[data-test="errorMessageUsername"]');

        cy.contains('Debe completar el nombre de usuario' || 'You must fill in the username');

        cy.get('div[data-test="errorMessagePassword"]');

        cy.contains('Debe completar la contraseña' || 'You must complete the password');
    });

    it('login correct displays the page admin', () => {
        const username = 'Admin';
        const password = 'Admin';

        cy.visit('http://localhost:3000');

        cy.get('form[data-test="FormLogin"]');

        cy.get('input[name="username"]').type(username);

        cy.get('input[name="password"]').type(password);

        cy.get('[data-test="SubmitLogin"]').click();

        cy.get('button[data-test="CreateButton"]');
    });
});
