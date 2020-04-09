import user from '../../fixtures/user'

describe('Login Functionality', function () {

    it('Testing list of strings which have a high probability of causing issues via API', function (done) {
        cy.fixture('blns').then((json) => {
            for (let i = 0; i < json.length; i++) {
                cy.request('POST', '/cadastrarUsuario', {
                    nome: json[i],
                    email: user.randomEmail,
                    senha: user.randomPassword
                })
                    .then((resp) => {
                        console.log(json[i])
                        expect(resp.status).to.eq(200)
                    })
            }
        });
    });

    it('Testing list of strings which have a high probability of causing issues via UI', function (done) {
        cy.fixture('blns').then((json) => {
                for (let i = 0; i < json.length; i++) {
                    cy.visit('/')
                    cy.contains('Novo usuário?').click()
                    cy.get('#nome').type(json[i])
                    cy.get('#email').type(user.randomEmail + i)
                    cy.get('#senha').type(user.randomPassword)
                    cy.contains('Cadastrar').click()
                    cy.get('div.alert-success').should('be.visible')
                }
            }
        )
    });
});

