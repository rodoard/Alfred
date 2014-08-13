define(["App"], function(App) {
  var factory, routerFor;
  routerFor = function(name) {
    var module, _routes;
    _routes = {};
    module = name.toLowerCase();
    _routes[module] = module;
    _routes["" + module + "/*action"] = module;
    return {
      url: function(path) {
        return "" + module + "/" + path;
      },
      routes: _routes,
      home: '',
      nav_home: function() {
        return this.navigate(this.home);
      },
      nav: function(path) {
        return this.navigate(path, {
          trigger: true
        });
      },
      navigate: function(path, options) {
        return App.appRouter.navigate(this.url(path), options);
      },
      redirect_to: function(path) {
        return window.location.href = path;
      }
    };
  };
  factory = {
    create: function(name) {
      return routerFor(name);
    }
  };
  return factory;
});
