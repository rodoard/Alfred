define([], function() {
  var unwrapped;
  unwrapped = {
    unwrap: function() {
      var children, hasClass, hasId;
      children = this.$el.children();
      if (children.length === 1) {
        if (this.$el.prevObject) {
          this.$el = this.$el.prevObject;
        }
        hasClass = this.$el.attr('class');
        hasId = this.$el.attr('id');
        if (!(hasId || hasClass)) {
          this.$el = children;
          this.$el.unwrap();
          this.setElement(this.$el);
        }
      }
    }
  };
  return unwrapped;
});
