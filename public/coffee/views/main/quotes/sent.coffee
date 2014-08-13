define [
  "helpers/views/composite_factory"
  "collections/quotes"
], (Factory, Quotes) ->
  Factory
    .contexted()
    .updateable_collection()
    .composite()
    .extend
      itemViewContainer: "tbody"
      collection: Quotes,
      template: "main/quotes/sent"
      onInitialize: ->
        @itemView = @context.view("quote")
        return
