var phantomcss = require('phantomcss');
var casper = require('casper').create({// log messages will be printed out to the console
    verbose: true,
    // only "debug" level messages will be logged
    logLevel: 'debug',
    viewportSize: {
        // override default browser windows size
        width: 1024,
        height: 768
    },
    pageSettings: {
        //The WebPage instance used by Casper will use these //settings
        "loadImages": true,
        "loadPlugins": true,
        "webSecurityEnabled": false,
        "ignoreSslErrors": true
    }
});

// start a casper test
casper.test.begin('Tags', function (test) {

    phantomcss.init({
        rebase: casper.cli.get('rebase')
    });

    // open page
    casper.start('http://localhost:3000/');

    // set your preferred view port size
    casper.viewport(1024, 768);

    casper.then(function () {
        // take the screenshot of the whole body element and save it under "body.png". The first parameter is actually a CSS selector
        phantomcss.screenshot('body', 'body');
    });

    casper.then(function now_check_the_screenshots() {
        // compare screenshots
        phantomcss.compareAll();
    });

    // run tests
    casper.run(function () {
        console.log('\nTest Completed.');
        casper.test.done();
    });
});