define ["helpers/templates"], (Templates) ->
  preloader =
    preload: (views, namespace) ->
      for name, view of views
        path = view.prototype.template
        path = path() if _(path).isFunction()
        precompiled = Templates.template path, namespace
        view.prototype.template = precompiled
      return
  preloader