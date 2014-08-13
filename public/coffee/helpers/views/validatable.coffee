define ["validation", "bootstrap_validation"], (Validation, BootstrapValidation) ->
  Bootstrap = BootstrapValidation()
  validatable =
    onValidationError: ->
    onValidationValid: ->
    clearValidation: (attr) ->
      Bootstrap.valid @, attr
    validationValidate: ->
      if isValid = @model.isValid(true)
        @onValidationValid()
      else
        @onValidationError()
      isValid
    validationInit: ->
      Backbone.Validation.configure
        labelFormatter: 'label'
      Backbone.Validation.bind(@, Bootstrap)
    validate: ->
      @validationValidate()
  validatable
