define(["App", "backbone", "marionette"], function(App, Backbone) {
  return Backbone.Marionette.Controller.extend({
    initialize: function(options) {
      App.execute("showHeaderView");
    },
    index: function() {
      App.execute("showMainView");
    },
    customer: function() {
      App.execute("showCustomerView");
    },
    thankyou: function() {
      App.execute("showThankyouView");
    },
    enquiry: function() {
      App.execute("showEnquiryProcessView");
    }
  });
});
