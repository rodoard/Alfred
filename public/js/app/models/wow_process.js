define(["models/factory"], function(Factory) {
  return Factory.fakeable().cacheable().model().extend({
    url: "/wow/process",
    fakeables: [],
    defaults: {
      enquiry_id: ""
    },
    validation: {}
  });
});
