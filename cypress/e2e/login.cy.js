/// <reference types="cypress" />

// Funcionalidade
import { abrirLogin, preencherCredenciais, enviarLogin, validarInputInvalido } from '../pages/login'

describe('login', () => {

   // Cenário 1 - usa o command de login (visit + credenciais + verificação)
   it('Login com sucesso', () => {
      cy.login()
   })

   // Cenário 2
   it('Login com senha inválida', () => {
      abrirLogin()
      preencherCredenciais('gilmar@teste.com.br', '123')
      enviarLogin()
      validarInputInvalido('Senha inválida.')
   })

   // Cenário 3
   it('Login com e-mail inválido', () => {
      abrirLogin()
      preencherCredenciais('eita', '123456')
      enviarLogin()
      validarInputInvalido('E-mail inválido.')
   })

})