define ->
  updateable =
    updateCollection: (Collection) ->
      @collection = new Collection()
      @collection.fetch()
  updateable