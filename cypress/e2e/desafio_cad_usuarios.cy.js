/// <reference types="cypress" />

// Funcionalidade
import { abrirCadastro, preencherNome, preencherEmail, preencherSenha, enviarCadastro, validarErro, validarSucesso } from '../pages/register'
import { faker } from '@faker-js/faker';
import { generat } from 'gerador-validador-cpf';
import generateCpf from '@brazilian-utils/generate-cpf';
import { cpf, cnpj } from 'cpf-cnpj-validator';

describe('Desafio Cadastro usuário', () => {

    const user_data = require('../fixtures/endereco_login.json')

    beforeEach(() => {
        abrirCadastro()
    })

    it('Cadastro de usuário com nome vazio', () => {
        preencherEmail(faker.internet.email())
        preencherSenha(faker.number.int(99999999))
        enviarCadastro()
        validarErro('O campo nome deve ser prenchido')
    })

    it('Cadastro de usuário com e-mail vazio', () => {
        preencherNome(faker.person.fullName())
        preencherSenha(faker.internet.password(6))
        enviarCadastro()
        validarErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com e-mail inválido', () => {
        cy.get('.fa-lock').click()
        preencherNome(faker.person.fullName())
        preencherEmail('emaillll')
        preencherSenha(faker.internet.password(6))
        enviarCadastro()
        validarErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro de usuário com senha vazia', () => {
        preencherNome(user_data.name)
        preencherEmail(faker.internet.email())
        enviarCadastro()
        validarErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário com senha inválida', () => {
        preencherNome(faker.person.fullName())
        preencherEmail(faker.internet.email())
        preencherSenha(faker.string.numeric(4))
        enviarCadastro()
        validarErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {

        const name = faker.person.fullName();

        preencherNome(name)
        preencherEmail(faker.internet.email({provider:'hotmail.com'}))
        preencherSenha(faker.number.int(99999999))
        enviarCadastro()
        validarSucesso(name)
    })
})