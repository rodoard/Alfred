define [
  "helpers/views/factory"
], (Factory) ->
  composite = new Factory("composite")
  extension =
    updateable: ->
      Klass = composite.updateable_collection().klass().extend
        update: (collection) ->
          @collection.reset collection.models
          @collection.trigger('change')
          @render()
      composite.klass(Klass)
      @

  _.extend(composite, extension)
  composite


