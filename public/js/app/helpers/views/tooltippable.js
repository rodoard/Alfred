define(function() {
  var tooltippable;
  tooltippable = {
    tooltippable: function() {
      return this.$el.find('.tooltiped').tooltip();
    }
  };
  return tooltippable;
});
