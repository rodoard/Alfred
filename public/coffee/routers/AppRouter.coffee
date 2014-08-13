define [
  "backbone"
  "marionette"
], ->
  Backbone.Marionette.AppRouter.extend
    appRoutes:
      "": "index"
      "enquiry": "enquiry"
      "customer": "customer"
      "thankyou": "thankyou"
    nav: (path) ->
      @navigate(path, {trigger:true})

