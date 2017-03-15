var baseConfig = require('../nightwatch.conf.js');

var testConfig = Object.assign({}, baseConfig, {
    src_folders : ['src/'],
    output_folder : 'reports/',
    custom_commands_path : 'customCommands/',
    page_objects_path : 'pageObjects/',
    globals_path : 'globals.js',
    test_runner : {
        type: 'mocha',
        options: {
            ui: 'bdd',
            reporter: 'list'
        }
    }
});

module.exports = testConfig;