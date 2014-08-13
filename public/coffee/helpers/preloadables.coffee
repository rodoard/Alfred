define (require) ->
  list =
    main: require("views/main/preloadables")
    components: require("views/components/preloadables")
  preloader = require("helpers/preloader")
  preloadables =
    views: (name) ->
      list[name]
    preload: ->
      for name, views of list
        preloader.preload(views)
  preloadables
