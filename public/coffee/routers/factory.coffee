define ["App"], (App) ->
  routerFor = (name) ->
    _routes = {}
    module = name.toLowerCase()
    _routes[module] = module
    _routes["#{module}/*action"] = module
    url: (path)->
      "#{module}/#{path}"
    routes: _routes
    home: ''
    nav_home: ->
      @navigate(@home)
    nav: (path) ->
      @navigate(path, {trigger:true})
    navigate: (path, options) ->
      App.appRouter.navigate(@url(path), options)
    redirect_to: (path) ->
      window.location.href = path
  factory =
    create:(name) ->
      routerFor(name)
  factory
