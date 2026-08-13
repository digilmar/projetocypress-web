/// <reference types="cypress" />
// Funcionalidade
import { preencherFaturamento, enviarFaturamento, confirmarPedido, escolherPagamento } from '../pages/checkout'

describe('Checkout', () => {

    beforeEach(() => {
        // realiza login antes de cada cenário
        cy.login()
        cy.visit('/checkout-one')
    })

    it('Realizar checkout com sucesso - Direct Bank Transfer', () => {
        preencherFaturamento()
        enviarFaturamento()
        confirmarPedido()
    })

    it('Realizar checkout com sucesso - Mobile Bancking', () => {
        preencherFaturamento()
        enviarFaturamento()
        escolherPagamento('#headingTwo > .collapsed > [name="payment"]')
        confirmarPedido()
    })

    it('Realizar checkout com sucesso - Paypal', () => {
        preencherFaturamento()
        enviarFaturamento()
        escolherPagamento('#headingThree > .collapsed > [name="payment"]')
        confirmarPedido()
    })

})