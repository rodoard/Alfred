define [
  "backbone"
  "cache/model"
  'localstorage'
], (Backbone, CacheModel) ->
  Backbone.Collection.extend
    url: "/cache"
    model: CacheModel
    localStorage: new Backbone.LocalStorage("API:CACHE")
    clear: ->
      @localStorage._clear()
    create: (model) ->
      new CacheModel @localStorage.create(model)
    get: (model) ->
      @localStorage.find(model)
    find: (condition) ->
      _(@localStorage.findAll()).where(condition)