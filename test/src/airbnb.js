module.exports = {

  disabled : false,
  'Demo test https://www.airbnb.de/' : function (client) {
      client
      .url('https://www.airbnb.de/')
      .waitForElementVisible('body', 1000)
  },
    'part two' : function(client) {
        client
            .setValue('input[name=location]', 'Zürich')
            .click('input[name=startDate]')
            .useXpath()
            .waitForElementPresent('//div[@id="searchbar"]', 1000)
            .click('//*[@id="searchbar"]/div/form/div[1]/div[2]/div/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr[5]/td[4]')
            .click('//*[@id="searchbar"]/div/form/div[1]/div[2]/div/div/div[2]/div/div[3]/div/div[3]/table/tbody/tr[3]/td[4]')
            .useCss()
            .click('button[type=submit]')
            .waitForElementPresent('div[class=map-canvas]', 4000)
            //ScreenShotMethod
            //.saveScreenshot('test.png');

        //BDD Expect Assertions from the Chai framework
        client.expect.element('#header-search-form').to.contain.value('Zürich');
        },

    after : function(client) {
        client.end();
    }
};



