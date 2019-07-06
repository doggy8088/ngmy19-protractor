// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        // "--headless",
        // "--ignore-certificate-errors",
        // "--disable-popup-blocking",
        // "--disable-gpu",
        // "--disable-infobars",
        // "--window-size=1024,768",
        // "--window-position=2560,0",
        // "--user-data-dir=G:/Chrome",
        // "--proxy-server=localhost:8888"
      ]
    }
  },
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: false } }));
  }
};
