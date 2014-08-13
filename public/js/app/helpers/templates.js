define(["HBS"], function(HBS) {
  var templates;
  templates = {
    template: function(path, namespace) {
      return HBS[namespace || "templates"][path];
    }
  };
  return templates;
});
