const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "http://localhost:3000/",
    "retries": 1,
    "viewportHeight": 360,
    "viewportWidth": 740,
    "scripts": {
      "testChrome":"npx cypress run --browser chrome --headless",
      "testFirefox": "npx cypress run --browser edge --headless",
      "testChromeMobile": "npx cypress run -b chrome --env viewportWidth=390,viewportHeight=844",
      "testFirefoxMobile": "npx cypress run -b firefox --env viewportWidth=390,viewportHeight=844"
    }
  },
});
