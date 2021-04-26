/* global describe it cy */

describe('User page', () => {
    it('displays user page', () => {
        const username = 'User';
        const password = 'User';

        cy.visit('http://localhost:3000/user');

        cy.get('form[data-test="FormLogin"]');

        cy.get('input[name="username"]').type(username);

        cy.get('input[name="password"]').type(password);

        cy.get('[data-test="SubmitLogin"]').click();

        cy.get('[data-test="Notification"]').click();

        cy.get('[data-test="Role"]').click();

        cy.get('[data-test="action-0-0"]').click();

        cy.get('[data-test="Button"]').click();

        cy.get('div[data-test="LoginInputUsername"]');
    });
});
