define(["helpers/views/composite_factory", "collections/enquiries"], function(Factory, Enquiries) {
  return Factory.contexted().updateable_collection().composite().extend({
    itemViewContainer: "tbody",
    collection: Enquiries,
    template: "main/enquiries/received",
    onInitialize: function() {
      this.itemView = this.context.view("enquiry");
      this.viewEvents = this.itemView.prototype.viewEvents;
    }
  });
});
