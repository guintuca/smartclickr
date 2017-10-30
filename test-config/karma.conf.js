// Karma configuration
var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  config.set({
    basePath: '../', // root of the project is one level up from this file
    browsers: ['Chrome'], // run tests in Chrome
    frameworks: ['jasmine'],
    files: [ // list of files / patterns to load in the browser
      {
        pattern: './test-config/karma-test-shim.js'
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false
      }
    ],
    logLevel: config.LOG_INFO,
    // loggers: [],
    proxies: {
      '/assets/': '/base/src/assets/'
    },
    preprocessors: { // preprocess matching files before serving them to the browser
      './test-config/karma-test-shim.js': ['webpack', 'sourcemap']
    },
    // test results reporter to use
    reporters: config.coverage ? ['kjhtml', 'coverage-istanbul'] : ['mocha', 'kjhtml'],

    // webpack configuration
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },

    // coverage/istanbul configuration
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    }
  });
}
