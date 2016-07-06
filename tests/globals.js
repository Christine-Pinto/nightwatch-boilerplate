var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports/',
    reportFilename:'report.html',
    themeName: 'cover'
});

module.exports = {
    reporter : function(results, done) {
        reporter.fn(results, done);
        done();
    }
};