define [
  "helpers/views/composite_factory"
  "collections/wow_done"
], (Factory, WowDone) ->
  Factory
    .contexted()
    .updateable_collection()
    .composite()
    .extend
      itemViewContainer: "tbody"
      collection: WowDone,
      template: "main/wow/done"
      onInitialize: ->
        @itemView = @context.view("wow_process")
        return
