const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'f2apqt',

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportTitle: 'Curso de Cypress',
    reportPageTitle: 'Projeto do curso de Cypress',
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    viewportWidth: 1280,
    viewportHeight: 1020,
  },
});