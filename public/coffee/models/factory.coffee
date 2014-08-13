define ["backbone", "models/fakeable", "models/cacheable"], (Backbone, Fakeable, Cacheable) ->
  Orig = Backbone.Model
  Klass = null
  reset = ->
    Klass = _(Orig).clone()
  reset()
  factory =
    fakeable: ->
      Klass = Klass.extend(Fakeable)
      @
    cacheable: ->
      Klass = Klass.extend(Cacheable)
      @
    model: ->
      _model = _(Klass).clone()
      reset()
      _model
  factory
