define(["App", "Channels", "helpers/preloadables"], function(App, Channels, Preloadables) {
  var factory;
  factory = {
    create: function(name, MainView) {
      var context, lowercased, showView, view, views;
      lowercased = name.toLowerCase();
      context = Channels.chanel(lowercased);
      view = function() {
        context.router = App.appRouter;
        return new MainView({
          context: context
        });
      };
      showView = "show" + (_(name).classify()) + "View";
      App.commands.setHandler(showView, function() {
        var Region;
        Region = null;
        if (_(App).contains(lowercased)) {
          return Region = App[lowercased];
        } else {
          Region = App.app;
          return Region.show(view());
        }
      });
      views = Preloadables.views(name);
      context.view = function(name) {
        return views[name];
      };
      return {
        context: context,
        views: {
          namespace: "templates"
        }
      };
    }
  };
  return factory;
});
