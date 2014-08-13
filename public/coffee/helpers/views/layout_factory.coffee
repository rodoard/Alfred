define [
  "helpers/views/factory"
], (Factory) ->
  layout = new Factory("layout")
  subViewsInitializable = layout.subViewsInitializable
  _.extend(layout,
    subViewsInitializable: ->
      subViewsInitializable()
      klass = layout.klass()
      klass = klass.extend
        setupSubViews: ->
          views = @views || @context.views || {}
          regions = @autoInitialize || @regions || {}
          if _.isPlainObject(regions)
            regions = _.keys(regions)
          @subviews = _.pick(views, regions)
          return
      layout.klass(klass)
      @
  )
  layout