define(["backbone", "models/quote"], function(Backbone, Quote) {
  return Backbone.Collection.extend({
    urlRoot: "/quotes",
    model: Quote
  });
});
