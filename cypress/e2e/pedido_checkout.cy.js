/// <reference types="cypress" />

// Funcionalidade
import { preencherFaturamento, enviarFaturamento, confirmarPedido, escolherPagamento } from '../pages/checkout'

describe('Pedido checkout', () => {

    //Importando dados do cadastro de usuário do arquivo (enderecos_login.json) que esta na fixtures
    const user_data = require('../fixtures/endereco_login.json')

    it('Login com sucesso', () => {
        cy.login()
        cy.get('#swal2-html-container').should('have.text', `Olá, ${user_data.email}`)
        cy.get('.swal2-confirm').click()
    })

    it('Adicionar itens pedido', () => {

        cy.visit('/')
            .get('.header-logo')



        // Encontrar e clicar no produto Belkin Boost Up Power Pack
        cy.get('.col-lg-3.col-md-4.col-sm-6.col-12')
            .contains('Belkin Boost Up Power Pack')
            .click()
        // Adicionar o produto ao carrinho
        cy.get('.links_Product_areas > .theme-btn-one')
            .click()

    })

    it('Inserir dados pagamento', () => {

        cy.visit('/checkout-one')
        preencherFaturamento()
        enviarFaturamento()
        escolherPagamento('#headingThree > .collapsed > [name="payment"]')
        confirmarPedido()
        cy.get('.close > span').click()
    })
})    