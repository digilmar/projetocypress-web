const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000, // Tempo limite padrão para comandos
    setupNodeEvents(on, config) {
      // implemente eventos de nó aqui
    },
    viewportWidth: 1280,  // Largura global
    viewportHeight: 1020, // Altura global
  },
});
