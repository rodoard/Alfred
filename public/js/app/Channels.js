define(["contexts/base"], function(Base) {
  var chanels, _chanels;
  _chanels = {};
  chanels = {
    chanel: function(name) {
      if (!_(_chanels).has(name)) {
        _chanels[name] = new Base(name);
      }
      return _chanels[name];
    }
  };
  return chanels;
});
