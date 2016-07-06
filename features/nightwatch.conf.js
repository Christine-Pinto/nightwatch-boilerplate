var baseConfig = require('../nightwatch.conf');
var nightwatchCucumber = require('nightwatch-cucumber');

var nightwatchCucumberConf = {
    runner: 'nightwatch',
    featureFiles: './',
    stepDefinitions: 'stepDefinitions',
    closeSession: 'afterFeature'
};

var featureConfig = Object.assign({}, baseConfig, {
    src_folders : [nightwatchCucumber(nightwatchCucumberConf)]
});

module.exports = featureConfig;