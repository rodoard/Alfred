define(["helpers/views/itemview_factory", "views/tabs", "views/tab/section"], function(Factory, Tabs, TabSection) {
  return Factory.unwrappable().attachable().contexted().item().extend({
    template: "main",
    events: {},
    addContentEvents: function(content) {
      var event, handler, wrapper, _ref, _results;
      wrapper = function(handler) {
        return function(evt) {
          return handler.call(this, evt);
        };
      };
      _ref = content.viewEvents;
      _results = [];
      for (event in _ref) {
        handler = _ref[event];
        _results.push(this.events[event] = wrapper(handler));
      }
      return _results;
    },
    onInitialize: function() {
      var names, process, recurse, self, tabs;
      process = function(name) {
        return name.replace(/Wow/, 'WOW');
      };
      names = function(section) {
        return process(_(section).chain().humanize().titleize().value());
      };
      tabs = [];
      this.tabs = null;
      self = this;
      recurse = function(section, next) {
        var collection, view;
        if (section) {
          view = self.context.view(section);
          collection = new view.prototype.collection();
          return collection.fetch({
            success: function(_collection) {
              var content;
              content = new view({
                context: self.context,
                collection: _collection
              });
              self.addContentEvents(content);
              tabs.push(new TabSection({
                name: names(section),
                section: section,
                content: content
              }));
              return recurse(_(next).first(), _(next).rest());
            }
          });
        } else {
          return self.tabs = new Tabs({
            tabs: tabs
          });
        }
      };
      recurse("enquiries", ["wow_done", "quotes"]);
    },
    onRenderUnwrap: function() {
      if (this.tabs) {
        return this.attach(this.tabs, "#sections");
      }
    }
  });
});
