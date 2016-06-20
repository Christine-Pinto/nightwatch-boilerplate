# nightwatch-boilerplate
boilerplate for nightwatch.js with selenium

Original Framework is from https://github.com/nightwatchjs/nightwatch 

I  created a Boilerplate out of the Example from https://github.com/nightwatchjs

## Install Nightwatch Boilerplate

First you need to install Node.js (https://nodejs.org/en/)

Then...
```sh
$ git clone git@github.com:nightwatchjs/nightwatch-boilerplate.git
$ cd nightwatch-boilerplate
$ npm install
```

## Run Tests

In this boilerplate you find one test which does a simple GUI Test on the react part of the airBnB Webiste. The configuration is set up (nightwatch.json) that the selenium server is started with the test and you do not have to start the server manuelly (file is under /lib/sel-serv.jar). The test is saved under test/src/ .

```sh
$ cd nightwatch-boilerplate
$ npm test
```

### Output should look like this
nightwatch@0.9.4 test C:\workspace\nightwatch
nightwatch test/src

Starting selenium server... started - PID:  5132

[Src\airbnb] Test Suite

Running:  Demo test https://www.airbnb.de/
 √ Element <body> was visible after 3278 milliseconds.

OK. 1 assertions passed. (6.869s)

Running:  part two

 √ Element <//div[@id="searchbar"]> was present after 46 milliseconds.
 
 √ Element <div[class=map-canvas]> was present after 688 milliseconds.
 
 √ Expected element <#header-search-form> to have value contain: "Zürich"

OK. 3 assertions passed. (8.251s)

OK. 4  total assertions passed. (15.745s)









