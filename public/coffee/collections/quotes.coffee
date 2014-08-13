define [
  "backbone"
  "models/quote"
], (Backbone, Quote) ->
   Backbone.Collection.extend
    urlRoot:"/quotes"
    model: Quote