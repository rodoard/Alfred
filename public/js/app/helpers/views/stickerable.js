define(function(require) {
  var stickerable;
  stickerable = {
    stickitInit: function() {
      var Bindable, Stickit;
      Bindable = require("helpers/views/bindable");
      Stickit = require("helpers/views/stickit");
      require("backbone.stickit");
      _(this).extend(Bindable, Stickit);
      return this.initBindings();
    }
  };
  return stickerable;
});
