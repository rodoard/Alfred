define(function() {
  var notifiable;
  notifiable = {
    notify: function(message) {
      var selector;
      selector = this.$el.find('#message');
      selector.fadeOut();
      selector.html(message);
      return selector.fadeIn();
    }
  };
  return notifiable;
});
