const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-grep/src/plugin")(config);
      return config;
    },
    baseUrl: "https://google.com",
    specPattern: "tests/cypress/e2e/**",
    supportFile: "tests/cypress/support/e2e.js",
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
  },
});
