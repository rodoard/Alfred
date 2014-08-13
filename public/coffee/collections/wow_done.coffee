define [
  "backbone"
  "models/wow_process"
], (Backbone, WowProcess) ->
   Backbone.Collection.extend
    urlRoot:"/wow/done"
    model: WowProcess