define(["backbone", "models/enquiry"], function(Backbone, Enquiry) {
  return Backbone.Collection.extend({
    url: "/enquiries",
    model: Enquiry
  });
});
