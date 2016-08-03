/*jshint node:true*/

var Blueprint  = require('../../lib/models/blueprint');

module.exports = {
  name: 'ember-freestyle-atomic',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var modelOptions = merge({}, options, {
      entity: {
        name: 'styleguide'
      }
    });

    var mainBlueprint = Blueprint.lookup("route", {
      ui: this.ui,
      analytics: this.analytics,
      project: this.project
    });

    var bowerPackages = [
      { name: 'remarkable', target: '1.6.2' },
      { name: 'highlightjs', target: '9.1.0' }
    ];

    return Promise.resolve()
      .then(function() {
        return mainBlueprint["install"](modelOptions);
      })
      .then(function() {
        var testBlueprint = mainBlueprint.lookupBlueprint(name + '-test', {
          ui: this.ui,
          analytics: this.analytics,
          project: this.project,
          ignoreMissing: true
        });

        if (!testBlueprint) { return; }

        if (testBlueprint.locals === Blueprint.prototype.locals) {
          testBlueprint.locals = function(options) {
            return mainBlueprint.locals(options);
          };
        }

        return this.addBowerPackagesToProject(bowerPackages);
      });
  }
};
