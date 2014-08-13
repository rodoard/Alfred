define(["models/faker"], function(Faker) {
  var _fakeable;
  _fakeable = {
    fakeables: [],
    fake: function() {
      var fakeable, _i, _len, _ref;
      _ref = this.fakeables;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        fakeable = _ref[_i];
        this.set(fakeable, Faker.fake(fakeable));
      }
    }
  };
  return _fakeable;
});
