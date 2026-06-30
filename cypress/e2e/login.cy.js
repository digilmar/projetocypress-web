/// <reference types="cypress" />

// Funcionalidade
describe('login', () => {

   // Cenário 1
   it('Login com sucesso', () => {
      // Abre site
      cy.visit('https://automationpratice.com.br/login')
      
      // Preenche e-mail
      cy.get('#user').type('digilmar@gmail.com')

      // Preenche senha
      cy.get('#password').type('Gab0714*')
      
      // Clica no botão de login
      cy.get('#btnLogin').click()

      // Verifica se o login foi bem-sucedido
      cy.get('#swal2-title').should('have.text', 'Login realizado')

   })   
   // Cenário 2
   it('Login com senha inválida', () => {
      cy.visit('https://automationpratice.com.br/login')
      cy.get('#user').type('gilmar@teste.com.br')
      cy.get('#password').type('123')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input')
         .should('have.text','Senha inválida.') 
         .should('be.visible')
   })   
   // Cenário 3
     it('Login com e-mail inválido', () => {
      cy.visit('https://automationpratice.com.br/login')
      cy.get('#user').type('eita')
      cy.get('#password').type('123456')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input')
         .should('have.text','E-mail inválido.') 
         .should('be.visible')

   })   
  
})