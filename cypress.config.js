const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://threadworks.mybijnessguru.xyz/users/sign_in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern: "cucumber/features/*.feature",
  },
});
