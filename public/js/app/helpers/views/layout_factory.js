define(["helpers/views/factory"], function(Factory) {
  var layout, subViewsInitializable;
  layout = new Factory("layout");
  subViewsInitializable = layout.subViewsInitializable;
  _.extend(layout, {
    subViewsInitializable: function() {
      var klass;
      subViewsInitializable();
      klass = layout.klass();
      klass = klass.extend({
        setupSubViews: function() {
          var regions, views;
          views = this.views || this.context.views || {};
          regions = this.autoInitialize || this.regions || {};
          if (_.isPlainObject(regions)) {
            regions = _.keys(regions);
          }
          this.subviews = _.pick(views, regions);
        }
      });
      layout.klass(klass);
      return this;
    }
  });
  return layout;
});
