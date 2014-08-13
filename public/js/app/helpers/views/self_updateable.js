define(function() {
  var updateable;
  updateable = {
    updateCollection: function(Collection) {
      this.collection = new Collection();
      return this.collection.fetch();
    }
  };
  return updateable;
});
