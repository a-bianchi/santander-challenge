/* global describe it cy */

describe('Admin page', () => {
    it('displays admin page', () => {
        const username = 'Admin';
        const password = 'Admin';

        cy.visit('http://localhost:3000');

        cy.get('form[data-test="FormLogin"]');

        cy.get('input[name="username"]').type(username);

        cy.get('input[name="password"]').type(password);

        cy.get('[data-test="SubmitLogin"]').click();

        cy.get('[data-test="Notification"]').click();

        cy.get('[data-test="Role"]').click();

        cy.get('[data-test="CreateButton"]').click();

        cy.get('input[name="title"]').type('Tests');

        cy.get('select[name="date"]').select('2021-05-01 - 19.2°C');

        cy.get('input[name="people"]').type(10);

        cy.get('[data-test="SubmitCreateForm"]').click();

        cy.get('tr[data-test="Tests-2"]');
    });
});
