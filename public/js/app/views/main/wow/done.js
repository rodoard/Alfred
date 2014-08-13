define(["helpers/views/composite_factory", "collections/wow_done"], function(Factory, WowDone) {
  return Factory.contexted().updateable_collection().composite().extend({
    itemViewContainer: "tbody",
    collection: WowDone,
    template: "main/wow/done",
    onInitialize: function() {
      this.itemView = this.context.view("wow_process");
    }
  });
});
