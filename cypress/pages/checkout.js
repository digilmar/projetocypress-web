// Funções simples de page object para o fluxo de checkout (nomes em PT-BR)
import { faker } from '@faker-js/faker';

export function preencherFaturamento() {
  cy.get('#fname').clear().type(faker.person.firstName())
  cy.get('#lname').clear().type(faker.person.lastName())
  cy.get('#cname').clear().type(faker.company.name())
  cy.get('#email').clear().type(faker.internet.email())
  cy.get('#country').select(2)
  cy.get('#city').select(1)
  cy.get('#zip').clear().type(faker.number.int(99999999))
  cy.get('#faddress').clear().type(faker.location.streetAddress())
  cy.get('#messages').clear().type('Mensagem de teste')
  cy.get('#materialUnchecked').click()
}

export function enviarFaturamento() {
  cy.get('.checkout-area-bg > .theme-btn-one').click()
  cy.get(':nth-child(2) > h3').should('contain', 'Billings Information registred with success!')
}

export function confirmarPedido() {
  cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
  cy.get('.offer_modal_left > h3').should('contain', 'Congrats! Your order was created with sucess!')
}

export function escolherPagamento(selectorPagamento) {
  if (selectorPagamento) cy.get(selectorPagamento).click()
}
