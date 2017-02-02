var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports/',
    reportFilename:'report.html',
    themeName: 'cover'
});

module.exports = {
    logger: require('./customCommands/logger.js'),
    scrollToClick: require('./customCommands/scrollToClick'),
    scrollToSelector: require('./customCommands/scrollToSelector'),

    reporter : function(results, done) {
        reporter.fn(results, done);
        done();
    },
    afterEach: function(browser, done) {
        browser.end();
        setTimeout(function() {
            done();
        }, 200);
    }
};