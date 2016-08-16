/*jshint node:true*/


module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
  beforeInstall: function(options) {
    console.dir(this);
  },
  afterInstall: function(options) {
    console.dir(options);
    options.entity.name = 'styleguide';
    options.taskOptions.args.push('styleguide');
    options.args.push('styleguide');

    return this.lookupBlueprint('route').install(options);
  }
};
