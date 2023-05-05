const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter', 


  retries: {
    runMode: 0,
    openMode: 0,
    },


    screenshotOnRunFailure: true,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


      

      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
