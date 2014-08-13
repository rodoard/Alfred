define(function(require) {
  var list, preloadables, preloader;
  list = {
    main: require("views/main/preloadables"),
    components: require("views/components/preloadables")
  };
  preloader = require("helpers/preloader");
  preloadables = {
    views: function(name) {
      return list[name];
    },
    preload: function() {
      var name, views, _results;
      _results = [];
      for (name in list) {
        views = list[name];
        _results.push(preloader.preload(views));
      }
      return _results;
    }
  };
  return preloadables;
});
