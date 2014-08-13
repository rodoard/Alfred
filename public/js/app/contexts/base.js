define(["backbone"], function(Backbone) {
  var base;
  base = function() {
    var commands, context, reqres, vent;
    reqres = new Backbone.Wreqr.RequestResponse();
    vent = new Backbone.Wreqr.EventAggregator();
    commands = new Backbone.Wreqr.Commands();
    context = {
      vent: vent,
      reqres: reqres,
      commands: commands,
      execute: function(command, context) {
        return commands.execute(command, context);
      }
    };
    return context;
  };
  return base;
});
