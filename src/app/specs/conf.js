exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}