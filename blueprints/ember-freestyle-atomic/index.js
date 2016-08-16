/*jshint node:true*/


module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
  normalizeEntityName: function(){
    return "styleguide";
  },
  afterInstall: function(options) {
    return this.lookupBlueprint('route').install(options);
  }
};
