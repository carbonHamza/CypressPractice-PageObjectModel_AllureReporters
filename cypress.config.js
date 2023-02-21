const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 600,
    waitForAnimations: true,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 6000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
    failOnStatusCode: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
