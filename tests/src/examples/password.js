module.exports = {
    tags: ['simpletest'],
    disabled: false,

    'Simple Test for password input field' : function (client) {

        client
            .url('https://www.myaccount.ubc.ca/myAccount/')
            .waitForElementVisible('body', 2000);

        client.expect.element('body').to.be.present;

        client.logger('Check Password Input field');
        client.expect.element('input[name="mainForm:password"]').to.be.visible;
        client.expect.element('input[name="mainForm:password"]').to.be.a('input');
        client.expect.element('input[name="mainForm:password"]').to.have.attribute('type').which.equal('password');





    }
};
