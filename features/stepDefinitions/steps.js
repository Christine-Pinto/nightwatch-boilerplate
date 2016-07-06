module.exports = function () {
    this.Given(/^I open Google's search page$/, function () {
        this
            .url('http://google.com')
            .waitForElementVisible('body', 1000)
    });

    this.Then(/^the title is "([^"]*)"$/, function (title) {
        this.assert.title(title)
    });

    this.Then(/^the Google search form exists$/, function () {
        this.assert.visible('input[name="q"]')
    });

    this.When(/^i type in "([^"]*)"$/, function (value) {
        this.setValue('input[name="q"]', value);
    });
};