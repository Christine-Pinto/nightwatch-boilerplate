exports.command = function(selector) {
    const self = this;
    self.getLocationInView(selector, function(result) {
        self.logger('scroll and then click on ' + selector);
        self.execute('scrollTo(' + result.value.x + ',' + (result.value.y - 65) + ')'); // 65 Offset
        self.waitForElementVisible(selector, 4000);
        self.click(selector);
    });
    return this;
};