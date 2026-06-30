/// <reference types="cypress"/> 
// Esse comando acima é para que o Cypress reconheça os comandos do Cypress e não dê erro de sintaxe no VSCode

describe ('Comandos básicos', () => {

    it('Acessar uma url', () => {
        cy.visit('https://automationpratice.com.br/login');

    });

    it('Encontrar um elemento', () => {
        cy.visit('https://automationpratice.com.br/login');
    // get: comando para encontrar um elemento na página
        //cy.get('#user') // Com o # é para encontrar um elemento pelo id, caso
        cy.get('.form-control') // Com o . é para encontrar um elemento pela classe, caso haja mais de um elemento com a mesma classe, o Cypress irá retornar o primeiro elemento encontrado
    
    // find: comando para encontrar um elemento dentro de outro elemento
        cy.get('.mc-form').find('.form-control') // Com o find, o Cypress irá procurar o elemento form-control dentro do elemento mc-form
        
    // contains: comando para encontrar um elemento que contenha um texto específico
    //Porém o correto é diminuir o escopo do contains, ou seja, primeiro encontrar o elemento pai e depois procurar o elemento filho que contenha o texto específico
        cy.get('.mc-form').contains('Send') // Com o contains, o Cypress irá procurar o elemento que contenha o texto E-mail dentro do elemento mc-form
        //cy.get('#email').should('be.visible');

    });

    it('Preencher um campo', () => {
        cy.visit('https://automationpratice.com.br/login');
        
        cy.get('#user').type('digilmar@gmail.com')
        cy.get('#password').type('123456')
       

    });

    it('Click', () => {
        cy.visit('https://automationpratice.com.br/login');

        cy.get('#btnLogin').click() // Com o click, o Cypress irá clicar no elemento encontrado
    });

    it('Select/Dropdown', () => { 
        cy.visit('https://automationpratice.com.br/checkout-one');
        //cy.get('#country').select('usa') // Pegar um campo do checbox pelo nome
        cy.get('#country').select(2) // Pegar um campo do checbox pela posição

    });

    it('Checkbox/Radio', () => { // Comando para clicar no checkbox
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#materialUnchecked').check();
        cy.get('#materialUnchecked').uncheck();

    });

      it('Validar um elemento', () => { // Comando .only dentro do it, só executa esse comando expecificado, os outros não serão executados.

        cy.visit('https://automationpratice.com.br/login');
        // No comando abaixo ele verifica se o item esta visivel e valida pelo texto que tem nele
        cy.get('#createAccount')
            .should('be.visible')
            .should('have.text', 'Ainda não tem conta?');

    });

});