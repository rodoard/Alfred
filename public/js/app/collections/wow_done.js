define(["backbone", "models/wow_process"], function(Backbone, WowProcess) {
  return Backbone.Collection.extend({
    urlRoot: "/wow/done",
    model: WowProcess
  });
});
