const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const phantomjs = require('phantomjs-prebuilt');
const dockerSeleniumHub = '127.0.0.1';
const argv = require('yargs').argv;


if (argv.cucumber) {
    require('nightwatch-cucumber')({
        cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:features/reports/cucumber.json', 'features']
    });
}
module.exports = {
    selenium : {
        start_process : true,
        server_path : seleniumServer.path,
        log_path : '' ,
        selenium_host : '127.0.0.1',
        selenium_port : 4444,
        cli_args : {
            'webdriver.chrome.driver' : chromedriver.path,
            'webdriver.ie.driver' :'' ,
            'webdriver.firefox.profile':''
        }
    },
    test_settings : {
        default : {
            launch_url : 'http://localhost',
            silent : true,
            disable_colors: false,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'screenshoots/' // relativ to src directory
            },
            desiredCapabilities : {
                browserName : 'chrome',
                javascriptEnabled : true,
                acceptSslCerts : true,
                'phantomjs.binary.path': phantomjs.path
            },
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        phantomjs: {
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        local_docker:{
            selenium_host: dockerSeleniumHub,
            selenium_port: 4444,
            start_process : false,
            desiredCapabilities: {
                browserName: 'firefox'
            }
        },
        mocha: {
            test_runner: {
                type: 'mocha',
                options: {
                    ui: 'bdd',
                    reporter: 'list'
                }
            }
        }
    }
};





