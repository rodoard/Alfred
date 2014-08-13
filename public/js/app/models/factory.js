define(["backbone", "models/fakeable", "models/cacheable"], function(Backbone, Fakeable, Cacheable) {
  var Klass, Orig, factory, reset;
  Orig = Backbone.Model;
  Klass = null;
  reset = function() {
    return Klass = _(Orig).clone();
  };
  reset();
  factory = {
    fakeable: function() {
      Klass = Klass.extend(Fakeable);
      return this;
    },
    cacheable: function() {
      Klass = Klass.extend(Cacheable);
      return this;
    },
    model: function() {
      var _model;
      _model = _(Klass).clone();
      reset();
      return _model;
    }
  };
  return factory;
});
