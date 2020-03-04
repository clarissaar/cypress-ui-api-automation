const faker = require('faker');

let user;

before(function () {
    user = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.random.number()
    }
});

describe('Login Functionality', function () {

    it('Create new user via UI', function () {
        cy.visit('/')
        cy.contains('Novo usuário?').click()
        cy.get('#nome').type(user.randomName)
        cy.get('#email').type(user.randomEmail)
        cy.get('#senha').type(user.randomPassword)
        cy.contains('Cadastrar').click()
        cy.get('div.alert-success').should('be.visible')
    })

    it('Login with user just created via UI', function () {
        cy.visit('/')
        cy.get('#email').type(user.randomEmail)
        cy.get('#senha').type(user.randomPassword)
        cy.contains('Entrar').click()
        cy.get('div.alert-success').should('be.visible')
    })
})
