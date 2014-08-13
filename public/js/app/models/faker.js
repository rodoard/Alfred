define(["faker"], function(Faker) {
  var fakeables, faker;
  fakeables = {
    phone: function() {
      return Faker.PhoneNumber.phoneNumber();
    },
    email: function() {
      return Faker.Internet.email();
    },
    dob: function(atleast) {
      var from;
      from = new Date();
      return Faker.Date.past(20, from - 18);
    },
    name: function() {
      return Faker.Name.findName();
    }
  };
  faker = {
    fake: function(attribute) {
      if (_(fakeables[attribute]).isFunction()) {
        return fakeables[attribute]();
      }
    }
  };
  return faker;
});
