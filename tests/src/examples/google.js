module.exports = {
    tags: ['simpletest'],
    disabled: false,
    'Demo test Google' : function (client) {
        client
            .url('https://www.google.no/')
            .pause(2000);

        client.expect.element('body').to.be.present;

        client.logger('Check Attributes');
        client.expect.element('body').to.have.attribute('class').which.contains('vasq');
        client.expect.element('body').to.have.attribute('class').which.matches(/vasq$/);
        client.expect.element('body').to.have.attribute('class').before(1000);

        client.expect.element('#hplogo').text.to.match(/Nor/).before(1000);

        client.setValue('#lst-ib', 'Norway').pause(500);
        client.expect.element('#lst-ib').to.have.value.equal('Norway');
        client.expect.element('#lst-ib').to.be.an('input');
        client.expect.element('#lst-ib').to.be.not.selected;
        client.expect.element('#lst-ib').to.be.visible;
    }
};
