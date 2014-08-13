define(["helpers/views/composite_factory", "collections/quotes"], function(Factory, Quotes) {
  return Factory.contexted().updateable_collection().composite().extend({
    itemViewContainer: "tbody",
    collection: Quotes,
    template: "main/quotes/sent",
    onInitialize: function() {
      this.itemView = this.context.view("quote");
    }
  });
});
