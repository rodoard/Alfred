define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    url: "/cache",
    defaults: {
      type: "",
      data: ""
    },
    json: function() {
      return _.extend({}, this.get('data'), {
        id: this.id
      });
    }
  });
});
