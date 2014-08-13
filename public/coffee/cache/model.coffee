define ['backbone'], (Backbone) ->
  Backbone.Model.extend
    url: "/cache"
    defaults:
      type: ""
      data: ""
    json: ->
      _.extend({}, @get('data'), {id:@id})