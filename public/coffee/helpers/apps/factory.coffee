define ["App", "Channels", "helpers/preloadables"], (App, Channels, Preloadables) ->
  factory =
    create: (name, MainView) ->
      lowercased  = name.toLowerCase()
      context = Channels.chanel(lowercased)
      view = ->
        context.router = App.appRouter
        new MainView({context:context})
      showView = "show#{_(name).classify()}View"
      App.commands.setHandler showView, ->
        Region = null
        if _(App).contains(lowercased)
          Region = App[lowercased]
        else
          Region = App.app
          Region.show view()
      views = Preloadables.views(name)
      context.view = (name) ->
        views[name]
      context:context
      views:
        namespace: "templates"
  factory