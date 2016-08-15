/*jshint node:true*/
var Blueprint  = require('../../lib/models/blueprint');
var Promise    = require('../../lib/ext/promise');
var merge      = require('lodash/merge');


module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    console.log('After Install: Ember-Freestyle-Atomic');
    // Perform extra work here.
    var mainBlueprint = Blueprint.lookup("route", {
      ui: this.ui,
      analytics: this.analytics,
      project: this.project
    });

    return Promise.resolve()
      .then(function() {
        console.log('After Install: Ember-Freestyle-Atomic - Add Route');
        return mainBlueprint["install"](options);
      });
  }
};
