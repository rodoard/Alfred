define(function() {
  var cacheable;
  cacheable = {
    type: function() {
      return this.url.split('/')[1];
    }
  };
  return cacheable;
});
