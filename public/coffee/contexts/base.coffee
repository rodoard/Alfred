define ["backbone"], (Backbone) ->
  base = ->
    reqres = new Backbone.Wreqr.RequestResponse()
    vent = new Backbone.Wreqr.EventAggregator();
    commands = new Backbone.Wreqr.Commands();
    context =
      vent: vent
      reqres: reqres
      commands: commands
      execute: (command, context) ->
        commands.execute(command, context)
    context
  base
