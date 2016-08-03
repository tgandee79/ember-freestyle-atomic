/*jshint node:true*/

var getPathOption      = require('ember-cli-get-component-path-option');
var stringUtil         = require('ember-cli-string-utils');
var path               = require('path');

module.exports = {
  description: 'Generates an atomic atom component. The name will be prefaced with a-*.',

  locals: function(options) {

    // var dasherizedModuleName = stringUtil.dasherize(options.entity.name);
    var componentPathName = options.dasherizedModuleName;
    // var testType = options.testType || 'integration';
    // var friendlyTestDescription = testInfo.description(options.entity.name, 'Integration', 'Component');
    //
    // if (options.testType === 'unit') {
    //   friendlyTestDescription = testInfo.description(options.entity.name, 'Unit', 'Component');
    // }


    return {
      path: getPathOption(options),
      // testType: testType,
      componentPathName: componentPathName
      // friendlyTestDescription: friendlyTestDescription
    };
  },

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        return 'components/atoms';
      },
      __name__: function(options) {
        return "a-" + options.dasherizedModuleName;
      },
      __templatepath__: function(options) {
        return 'templates/components/atoms';
      },
      __templatename__: function(options) {
        return "a-" + options.dasherizedModuleName;
      },
      __stylepath__: function(options) {
        return "_" + stringUtil.camelize(options.dasherizedModuleName);
      }
    };
  },

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
  // beforeInstall
  // afterInstall
  // beforeUninstall
  // afterUninstall
};
