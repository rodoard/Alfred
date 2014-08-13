define(function() {
  var attachable, region, renderHtml, _attach;
  renderHtml = function(view) {
    return view.render().$el.html();
  };
  region = function(regionName) {
    if (regionName) {
      return this.$el.find(regionName);
    } else {
      return this.$el;
    }
  };
  _attach = function(view, selector) {
    return region.call(this, selector).html(renderHtml(view));
  };
  attachable = {
    attach: function(view, selector) {
      return _attach.call(this, view, selector);
    },
    attachSubviews: function() {
      var model, models, options, regionName, regions, selector, view, viewClass, views;
      models = this.models || {};
      regions = this.regions || {};
      views = this.subViews || {};
      for (regionName in regions) {
        selector = regions[regionName];
        options = {};
        viewClass = views[regionName];
        if (viewClass) {
          model = models[regionName];
          if (model) {
            options.model = model;
          }
          view = new viewClass(options);
          _attach.call(this, selector, view);
        }
      }
    }
  };
  return attachable;
});
