define(["helpers/views/itemview_factory", "models/enquiry"], function(Factory, Enquiry) {
  return Factory.contexted().unwrappable().stickerable().validatable().item().extend({
    template: "customer",
    onInitialize: function() {
      this.model = this.context.model;
      if (!this.model) {
        this.model = new Enquiry();
        this.model.fake();
      }
      this.stickitInit();
      return this.validationInit();
    },
    events: {
      "click button#submit": 'onSubmit'
    },
    onSubmit: function(event) {
      var attribute, self, val, _ref;
      event.preventDefault();
      self = this;
      _ref = this.model.attributes;
      for (attribute in _ref) {
        val = _ref[attribute];
        this.model.set(attribute, this.$("#" + attribute).val());
      }
      return this.validate();
    },
    onValidationValid: function() {
      this.model.save();
      return this.context.router.nav('thankyou');
    },
    onRenderUnwrap: function() {
      return this.stickit();
    }
  });
});
