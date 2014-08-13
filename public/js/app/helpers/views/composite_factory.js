define(["helpers/views/factory"], function(Factory) {
  var composite, extension;
  composite = new Factory("composite");
  extension = {
    updateable: function() {
      var Klass;
      Klass = composite.updateable_collection().klass().extend({
        update: function(collection) {
          this.collection.reset(collection.models);
          this.collection.trigger('change');
          return this.render();
        }
      });
      composite.klass(Klass);
      return this;
    }
  };
  _.extend(composite, extension);
  return composite;
});
