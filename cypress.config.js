const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        'getImportantToken'() {
          return process.env.IMPORTANT_TOKEN
        },
        'getCypressToken'() {
          return config.env.TOKEN
        }
      })
    },
  },
});
