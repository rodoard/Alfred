define(function() {
  var contexted;
  contexted = {
    onInitialize: function() {},
    initialize: function(_arg) {
      this.context = _arg.context;
      return this.onInitialize();
    }
  };
  return contexted;
});
