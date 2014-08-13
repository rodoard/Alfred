define(function() {
  var selectable;
  selectable = {
    selected: function(elem, klass) {
      this.$el.find(klass).removeClass("selected");
      return elem.addClass("selected");
    }
  };
  return selectable;
});
