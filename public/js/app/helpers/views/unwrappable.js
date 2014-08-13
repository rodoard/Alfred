define(['helpers/views/unwrapped'], function(Unwrapped) {
  var unwrappable;
  unwrappable = {
    onRenderUnwrap: function() {},
    onRender: function() {
      this.onRenderUnwrap();
      return this.unwrap();
    }
  };
  _.extend(unwrappable, Unwrapped);
  return unwrappable;
});
