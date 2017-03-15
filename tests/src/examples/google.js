describe('demo google test for a boilerplate', function() {
    before(function(client, done) {
        done();
    });

    after(function(client, done) {
        client.end(function() {
            done();
        });
    });

    afterEach(function(client, done) {
        done();
    });

    beforeEach(function(client, done) {
        done();
    });

    describe('with Nightwatch uses BDD style', function() {
        it('to search for something', function(client) {
            client
                .url('http://google.com')
                .expect.element('body').to.be.present.before(1000);

            client.setValue('input[type=text]', ['nightwatch boilerplate', client.Keys.ENTER])
                .waitForElementVisible('#rcnt', 1500)
                .assert.containsText('#main', 'Nightwatch');
        });
        it('to click on pictures section', function(client) {
            client
                .click('#hdtb-msb > div:nth-child(1) > div:nth-child(2)')
                .useXpath() //you can also you XPath to find a element
                .waitForElementVisible('//*[@id="isr_mc"]', 5000)
        });
    });

    describe('and see if second describe block', function() {
        it('to search for something', function(client) {
            client
                .url('http://github.com')
                .waitForElementVisible('body', 2000)
        });
    });
});