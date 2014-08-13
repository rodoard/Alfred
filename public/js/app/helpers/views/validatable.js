define(["validation", "bootstrap_validation"], function(Validation, BootstrapValidation) {
  var Bootstrap, validatable;
  Bootstrap = BootstrapValidation();
  validatable = {
    onValidationError: function() {},
    onValidationValid: function() {},
    clearValidation: function(attr) {
      return Bootstrap.valid(this, attr);
    },
    validationValidate: function() {
      var isValid;
      if (isValid = this.model.isValid(true)) {
        this.onValidationValid();
      } else {
        this.onValidationError();
      }
      return isValid;
    },
    validationInit: function() {
      Backbone.Validation.configure({
        labelFormatter: 'label'
      });
      return Backbone.Validation.bind(this, Bootstrap);
    },
    validate: function() {
      return this.validationValidate();
    }
  };
  return validatable;
});
