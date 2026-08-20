// Page object simples para cadastro de usuário
// Page object simples para cadastro de usuário
export function abrirCadastro() {
  cy.visit('/register')
}

export function preencherNome(name) {
  cy.get('#user').clear().type(name)
}

export function preencherEmail(email) {
  cy.get('#email').clear().type(email)
}

export function preencherSenha(password) {
  cy.get('#password').clear().type(password)
}

export function enviarCadastro() {
  cy.get('#btnRegister').click()
}

export function validarErro(text) {
  cy.get('.errorLabel').should('have.text', text)
}

export function validarSucesso(name) {
  cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
  cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${name}`)
}
