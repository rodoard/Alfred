define(["backbone", "jquery", "marionette", "underscore", "bootstrap"], function(Backbone) {
  var App, isMobile;
  isMobile = function() {
    var ua;
    ua = navigator.userAgent || navigator.vendor || window.opera(window(window.document));
    return /iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/.test(ua);
  };
  App = new Backbone.Marionette.Application();
  App.addRegions({
    app: "#app",
    header: "#header",
    main: "#main"
  });
  App.mobile = isMobile();
  App.addInitializer(function(options) {
    Backbone.history.start();
  });
  return App;
});
