const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(process.env)
      on("task", {
        'getImportantToken'() {
          return process.env.IMPORTANT_TOKEN
        }
      })
    },
  },
});
