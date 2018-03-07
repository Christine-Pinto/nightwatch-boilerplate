module.exports = {
    tags: ['simpletest'],
    disabled: false,

    'Google Simple Search Test' : function (client) {
        const searchObject = 'Germany';

        client
            .url('https://www.google.no/')
            .waitForElementVisible('#hplogo', 2000);

        client.expect.element('body').to.be.present;

        client.logger('Check Attributes');
        client.expect.element('body').to.have.attribute('class').which.contains('vasq');
        client.expect.element('body').to.have.attribute('onload');

        client.expect.element('#lst-ib').to.be.an('input');

        client.logger('Search for ' + searchObject);
        client.setValue('#lst-ib', searchObject);
        client.expect.element('#lst-ib').to.have.value.equal(searchObject);
        client
            .keys(client.Keys.ENTER)
            .waitForElementVisible('#search', 2000);
    }
};
