define [
  "App"
  "backbone"
  "marionette"
], (App, Backbone) ->
  Backbone.Marionette.Controller.extend
    initialize: (options) ->
      App.execute "showHeaderView"
      return
    index: ->
      App.execute "showMainView"
      return
    customer: ->
      App.execute "showCustomerView"
      return
    thankyou: ->
      App.execute "showThankyouView"
      return
    enquiry: ->
      App.execute "showEnquiryProcessView"
      return

