/// <reference types="cypress" />

// Funcionalidade - Cadastro de usuários

describe('cadastroUsuarios', () => {
    // Cenário 1 - Usuário cadastrado realizado com sucesso
    it('Login com sucesso', () => {
        // Acessar o site

        cy.visit('https://automationpratice.com.br/');

        // Clicar no botão Cadastro
        cy.get('.right_list_fix')
            .contains('Cadastro')
            .click()

        // Preencher campo Nome
        cy.get('#user').type('Gilmar Figueiredo da Silva')


        // Preencher campo E-mail
        cy.get('#email').type('digilmar@gmail.com')

        // Preencher campo senha
        cy.get('#password').type('123456789')

        // Cliar no botão Cadastrar
        cy.get('#btnRegister').click()

        // Validar a mensagem de Cadasatro realizado
        cy.get('.swal2-title')
            .should('have.text', 'Cadastro realizado!')
            .should('be.visible')

        // Clicar no botão OK da mensagem de Cadastro realizado.
        cy.get('.swal2-confirm').click()
    })

    // Cenário 2 - Cadastro sem o campo nome
    // Acessar o site
    // Acessar o site
    it('Login sem nome', () => {
        // Acessar o site

        cy.visit('https://automationpratice.com.br/');

        // Clicar no botão Cadastro
        cy.get('.right_list_fix')
            .contains('Cadastro')
            .click()

        // Preencher campo Nome
        cy.get('#user')


        // Preencher campo E-mail
        cy.get('#email').type('digilmar@gmail.com')

        // Preencher campo senha
        cy.get('#password').type('123456789')

        // Cliar no botão Cadastrar
        cy.get('#btnRegister').click()

        // Validar mensagem de campo sem nome
        cy.get('.errorLabel').contains('O campo nome deve ser prenchido')

    })

    // Cenário 3 - Cadastro com e-mail errado

    it('Login sem e-mail', () => {
        // Acessar o site

        cy.visit('https://automationpratice.com.br/');

        // Clicar no botão Cadastro
        cy.get('.right_list_fix')
            .contains('Cadastro')
            .click()

        // Preencher campo Nome
        cy.get('#user').type('Gilmar Figueiredo da Silva')


        // Preencher campo E-mail
        cy.get('#email')

        // Preencher campo senha
        cy.get('#password').type('123456789')

        // Cliar no botão Cadastrar
        cy.get('#btnRegister').click()

        // Validar mensagem de campo e-mail sem informação
        cy.get('.errorLabel').contains('O campo e-mail deve ser prenchido corretamente')

    })

    // Cenário 4 - Cadastro com senha errada.

    it('Login sem senha', () => {
        // Acessar o site

        cy.visit('https://automationpratice.com.br/');

        // Clicar no botão Cadastro
        cy.get('.right_list_fix')
            .contains('Cadastro')
            .click()

        // Preencher campo Nome
        cy.get('#user').type('Gilmar Figueiredo da Silva')


        // Preencher campo E-mail
        cy.get('#email').type('digilmar@gmail.com')

        // Preencher campo senha
        cy.get('#password')

        // Cliar no botão Cadastrar
        cy.get('#btnRegister').click()

        // Validar mensagem do campo senha sem informação
        cy.get('.errorLabel').contains('O campo senha deve ter pelo menos 6 dígitos')

    })

})