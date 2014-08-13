define ["helpers/views/itemview_factory", "models/enquiry"], (Factory, Enquiry) ->
  Factory.contexted().unwrappable().stickerable().validatable().item().extend
    template: "customer"
    onInitialize: ->
      @model = @context.model
      unless @model
        @model = new Enquiry()
        @model.fake()
      @stickitInit()
      @validationInit()

    events:
      "click button#submit": 'onSubmit'

    onSubmit: (event) ->
      event.preventDefault()
      self = @
      for attribute, val of @model.attributes
        @model.set(attribute, @$("##{attribute}").val())
      @validate()
    onValidationValid: ->
      @model.save()
      @context.router.nav('thankyou')
    onRenderUnwrap: ->
      @stickit()