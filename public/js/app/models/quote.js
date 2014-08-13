define(["models/factory"], function(Factory) {
  return Factory.fakeable().cacheable().model().extend({
    url: "/quotes/sent",
    fakeables: [],
    defaults: {
      enquiry_id: ""
    },
    validation: {}
  });
});
