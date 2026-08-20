const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'f2apqt',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
     reporterOptions: {
    charts: true,
    reportTitle: 'Curso de Cypress',
    reportPageTitle: 'Projeto do curso de Cypress',
     },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000, // Tempo limite padrão para comandos
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implemente eventos de nó aqui
    },
    viewportWidth: 1280,  // Largura global
    viewportHeight: 1020, // Altura global
  },
});
