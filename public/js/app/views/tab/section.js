define(["helpers/views/itemview_factory", "backbone"], function(Factory, Backbone) {
  return Factory.attachable().item().extend({
    template: "tab/section",
    initialize: function(options) {
      this._name = options.name;
      this._section = options.section;
      this.model = new Backbone.Model({
        section: this._section
      });
      return this._content = options.content;
    },
    events: {
      click: ""
    },
    section: function() {
      return this._section;
    },
    name: function() {
      return this._name;
    },
    content: function() {
      this.render();
      return this.$el.html();
    },
    onRender: function() {
      var content;
      content = this._content.render().$el.html();
      return this.$('#' + this.section()).html(content);
    }
  });
});
