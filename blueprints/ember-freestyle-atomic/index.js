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
  // afterInstall: function(options) {
  //   return this.lookupBlueprint('route').install(options);
  // },
  afterInstall: function(options) {
   var entityName = options.entity.name;
   var routerStr = '\n  this.route("' + entityName + '");'

   return this.insertIntoFile('app/router.js', routerStr, {
       after: 'Route.map(Router, function() {'
     });
   });
 }
};
