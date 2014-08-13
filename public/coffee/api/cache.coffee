define [
  "App"
  "Cache"
  "backbone"
], (App, Cache, Backbone) ->
  old_sync = Backbone.sync
  intercept: ->
    Backbone.sync = (method, model, options) ->
      response = {}
      switch method
        when "read"
          #only models have type
          unless model.type
            #get models for a collection matching passed condition
            response = Cache.find({type:model.model.prototype.type()})
          else
            response = Cache.get(model.id)
        when "create"
          response = Cache.create(model.type(), model.toJSON())
          return options.success(response)
        else
          return old_sync.apply(this, arguments)
      return options.success(response)