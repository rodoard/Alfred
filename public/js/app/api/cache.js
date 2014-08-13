define(["App", "Cache", "backbone"], function(App, Cache, Backbone) {
  var old_sync;
  old_sync = Backbone.sync;
  return {
    intercept: function() {
      return Backbone.sync = function(method, model, options) {
        var response;
        response = {};
        switch (method) {
          case "read":
            if (!model.type) {
              response = Cache.find({
                type: model.model.prototype.type()
              });
            } else {
              response = Cache.get(model.id);
            }
            break;
          case "create":
            response = Cache.create(model.type(), model.toJSON());
            return options.success(response);
          default:
            return old_sync.apply(this, arguments);
        }
        return options.success(response);
      };
    }
  };
});
