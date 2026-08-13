// Page object simples para as ações de login (nomes em PT-BR)
export function abrirLogin() {
  cy.visit('/login')
}

export function preencherCredenciais(email, password) {
  cy.get('#user').clear().type(email)
  cy.get('#password').clear().type(password)
}

export function enviarLogin() {
  cy.get('#btnLogin').click()
}

export function validarLoginSucesso() {
  cy.get('#swal2-title').should('have.text', 'Login realizado')
}

export function validarInputInvalido(text) {
  cy.get('.invalid_input').should('have.text', text).should('be.visible')
}
