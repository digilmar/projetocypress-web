/// <reference types="cypress" />

// Funcionalidade
describe('Desafio Cadastro usuário', () => {

    // Declarando nomes para uma váriável
    
    const user_name = 'Gilmar Figueiredo'
    const user_email = 'digilmar@gmail.com'
    const user_password = '123456'

   it('Validar campo nome vazio', () => {
      // Acessou o site que está no arquivo da configuração e verificou se a logo est na página
      cy.visit('/')
        .get('.header-logo')

    // Clicar no botão cadastro quando o mesmo estiver visível
        cy.get('.fa-lock')
            .click()
    //Clicar no campo usuário quando visível
        cy.get('#user')
            .should('be.visible')
    
    // Clicar no registrar
        cy.get('#btnRegister')
            .click()

    // Validar mensagem de erro no campo obrigatório 'Nome'
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')

   })

    it('Validar campo e-mail vazio', () => {
      
      cy.visit('/')
        .get('.header-logo')
        
        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')
            .type(user_name)
  
        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

   })

      it('Validar campo e-mail inválido', () => {

      cy.visit('/')
        .get('.header-logo')
          
        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

         cy.get('#email')
            .should('be.visible')
            .type('emaillll')   
            
        cy.get('#password')
            .should('be.visible')
            .type('12345')      
            
   
        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

   })

       it('Validar campo senha vazio', () => {

      cy.visit('/')
        .get('.header-logo')
          
        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

         cy.get('#email')
            .should('be.visible')
            .type(user_email)    
            
   
        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

   })

   it('Validar campo senha inválida', () => {

      cy.visit('/')
        .get('.header-logo')
          
        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

         cy.get('#email')
            .should('be.visible')
            .type(user_email)   
            
        cy.get('#password')
            .should('be.visible')
            .type('12345')      
            
   
        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

   })

   it('Cadastro realizado com sucesso', () => {

      cy.visit('/')
        .get('.header-logo')
          
        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')
            .type(user_name)

         cy.get('#email')
            .should('be.visible')
            .type(user_email)   
            
        cy.get('#password')
            .should('be.visible')
            .type(user_password)      
            
   
        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${user_name}`)

   })

})
      