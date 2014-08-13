define(["backbone", "marionette"], function() {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      "": "index",
      "enquiry": "enquiry",
      "customer": "customer",
      "thankyou": "thankyou"
    },
    nav: function(path) {
      return this.navigate(path, {
        trigger: true
      });
    }
  });
});
