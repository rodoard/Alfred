define(["helpers/views/itemview_factory", "helpers/templates"], function(Factory, Templates) {
  return Factory.unwrappable().attachable().item().extend({
    template: "tabs",
    events: {
      "click a.tab": "tabShow"
    },
    tabShow: function(evt) {},
    initialize: function(_arg) {
      this.tabs = _arg.tabs;
    },
    find: function(selector) {
      return this.$(selector);
    },
    nav_tabs: function() {
      return this.find('.nav-tabs');
    },
    tab_content: function() {
      return this.find('.tab-content');
    },
    addContent: function(tab) {
      $(this.tab_content()).append(tab.content());
    },
    addTab: function(tab) {
      var name, nav, section, template;
      name = tab.name();
      section = tab.section();
      template = Templates.template("tab/nav");
      nav = template({
        name: name,
        section: section
      });
      $(this.nav_tabs()).append(nav);
    },
    addTabs: function(tabs) {
      var self;
      self = this;
      return _(tabs).each(function(tab) {
        self.addTab(tab);
        return self.addContent(tab);
      });
    },
    onRender: function() {
      if (this.tabs.length !== 0) {
        return this.addTabs(this.tabs);
      }
    }
  });
});
