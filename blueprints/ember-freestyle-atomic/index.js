/*jshint node:true*/
var fs = require("fs");

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

   fs.stat("app/styles/app.css", function(err, stats) {
     console.log(stats);
    //  if(stats.isFile()) {
    //    fs.unlink("app/styles/app.css");
    //  }
   });
   var self = this;
   return this.addPackageToProject("ember-remarkable", "^3.1.2").then(function() {
     return self.insertIntoFile('app/router.js', routerStr, {
       after: 'Router.map(function() {'
     });
   });
 }
};
