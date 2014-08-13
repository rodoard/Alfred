define ->
  initializable =
    autoInitSubviews: (options) ->
      self = @
      views = self.subviews || {}
      models = self.models || {}
      collections = self.collections || {}
      for view, viewClass of views
        view_options = {}
        if self.subview_options
          view_options = self.subview_options(view)
        klass = new viewClass(view_options)
        if models[view]
          klass.model = new models[view]()
        if collections[view]
          klass.collection = new collections[view]()
        if _.isFunction(klass.autoInitSubviews)
          klass.autoInitSubviews()
        self[view].show klass
      return
  initializable