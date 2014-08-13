define(["backbone", "cache/model", 'localstorage'], function(Backbone, CacheModel) {
  return Backbone.Collection.extend({
    url: "/cache",
    model: CacheModel,
    localStorage: new Backbone.LocalStorage("API:CACHE"),
    clear: function() {
      return this.localStorage._clear();
    },
    create: function(model) {
      return new CacheModel(this.localStorage.create(model));
    },
    get: function(model) {
      return this.localStorage.find(model);
    },
    find: function(condition) {
      return _(this.localStorage.findAll()).where(condition);
    }
  });
});
