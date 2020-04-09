import user from '../../fixtures/user'

describe('Login Functionality', function () {

    it('Create new user via API', function () {
        cy.request('POST', '/cadastrarUsuario', {
            nome: user.randomName,
            email: user.randomEmail,
            senha: user.randomPassword
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    });

    it('Login with user just created via API', function () {
        cy.request('POST', '/logar', {
            email: user.randomEmail,
            senha: user.randomPassword
        })
            .then((resp) => {
                expect(resp.status).to.eq(200)
            })
    });

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
});