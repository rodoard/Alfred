define(function(require) {
  var apps, list;
  list = {
    main: require("Main"),
    customer: require("Customer"),
    thankyou: require("Thankyou"),
    enquiry: require("Enquiry")
  };
  apps = {
    init: function() {
      var app, name, _results;
      _results = [];
      for (name in list) {
        app = list[name];
        if (_(app.init).isFunction()) {
          _results.push(app.init());
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };
  return apps;
});
