define(["helpers/templates"], function(Templates) {
  var preloader;
  preloader = {
    preload: function(views, namespace) {
      var name, path, precompiled, view;
      for (name in views) {
        view = views[name];
        path = view.prototype.template;
        if (_(path).isFunction()) {
          path = path();
        }
        precompiled = Templates.template(path, namespace);
        view.prototype.template = precompiled;
      }
    }
  };
  return preloader;
});
