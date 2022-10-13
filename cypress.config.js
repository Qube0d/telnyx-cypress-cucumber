const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      allureWriter(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    specPattern: '**/*.feature',
    //baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },
});


// const { defineConfig } = require('cypress');
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

// async function setupNodeEvents(on, config) {
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on(
//     'file:preprocessor',
//     createBundler({
//       plugins: [createEsbuildPlugin.default(config)],
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// module.exports = defineConfig({
//   e2e: {
//     specPattern: '**/*.feature',
//     supportFile: false,
//     setupNodeEvents,
//     chromeWebSecurity: false 
//   },

// });