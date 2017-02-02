exports.command = function(selector) {
    const browser = this;

    browser.getLocationInView(selector, function(result) {
        browser.logger('scroll to ' + selector);
        browser.execute('scrollTo(' + result.value.x + ',' + (result.value.y - 65) + ')'); // 65 Offset
    });
};