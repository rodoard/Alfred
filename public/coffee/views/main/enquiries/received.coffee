define [
  "helpers/views/composite_factory"
  "collections/enquiries"
], (Factory, Enquiries) ->
  Factory
    .contexted()
    .updateable_collection()
    .composite()
    .extend
      itemViewContainer: "tbody"
      collection: Enquiries,
      template: "main/enquiries/received"
      onInitialize: ->
        @itemView = @context.view("enquiry")
        @viewEvents = @itemView.prototype.viewEvents
        return
