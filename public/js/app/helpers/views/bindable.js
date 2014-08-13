define(function() {
  var bindable;
  bindable = {
    checkboxes: [],
    buildCheckboxes: function() {
      var checkbox, checkboxOptions, target, _i, _len, _ref, _results;
      _ref = this.checkboxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        checkbox = _ref[_i];
        target = this.bindings[checkbox];
        checkboxOptions = this.stickitHelper.checkboxOptions(target);
        _results.push(this.bindings[checkbox] = checkboxOptions);
      }
      return _results;
    },
    postBuildBindings: function() {
      return this.buildCheckboxes();
    },
    buildViewBindings: function() {
      var bindingParams, key, param, value, _i, _len, _results;
      bindingParams = this.model.defaults;
      bindingParams = decodeURIComponent($.param(bindingParams));
      bindingParams = _.words(bindingParams, '&');
      this.bindings = {};
      _results = [];
      for (_i = 0, _len = bindingParams.length; _i < _len; _i++) {
        param = bindingParams[_i];
        key = _.first(_.words(param, '='));
        value = key.replace(/\[/g, '');
        value = value.replace(/\]/g, '.');
        value = _.rtrim(value, '.');
        _results.push(this.bindings["[name='" + key + "']"] = value);
      }
      return _results;
    },
    initBindings: function() {
      this.buildViewBindings();
      return this.postBuildBindings();
    }
  };
  return bindable;
});
