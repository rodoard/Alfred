define [
  "helpers/views/factory_classes"
  "helpers/views/contexted"
  "helpers/views/updateable_model"
  "helpers/views/updateable_collection"
  "helpers/views/unwrappable"
  "helpers/views/subviews_initializable"
  "helpers/views/attachable"
  "helpers/views/selectable"
  "helpers/views/stickerable"
  "helpers/views/validatable"
  "helpers/views/notifiable"
  "helpers/views/self_updateable"
], (
  Klasses
  Contexted,
  UpdateableModel,
  UpdateableCollection,
  Unwrappable,
  SubViewsInitializable
  Attachable
  Selectable
  Stickerable
  Validatable
  Notifiable
  SelfUpdateable
) ->
  factory = (name) ->
    Klass = ""
    Original = Klasses[name]
    reset = ->
      Klass = _(Original).clone()
      return
    reset()
    properties =
      klass: (update) ->
        if update
          Klass = update
        Klass
      contexted: ->
        Klass = Klass.extend(Contexted)
        @
      selectable: ->
        Klass = Klass.extend(Selectable)
        @  
      attachable: ->
        Klass = Klass.extend(Attachable)
        @
      editable: ->
        Klass = Klass.extend(Editable)
        @
      self_updateable: ->
        Klass = Klass.extend(SelfUpdateable)
        @
      updateable_collection: ->
        Klass = Klass.extend(UpdateableCollection)
        @
      updateable: ->
        @updateable_model()

      stickerable: ->
        Klass = Klass.extend(Stickerable)
        @
      notifiable: ->
        Klass = Klass.extend(Notifiable)
        @
      validatable: ->
        Klass = Klass.extend(Validatable)
        @  
      updateable_model: ->
        Klass = Klass.extend(UpdateableModel)
        @
      subViewsInitializable: ->
        Klass = Klass.extend(SubViewsInitializable)
        @
      unwrappable: ->
        Klass = Klass.extend(Unwrappable)
        @

    properties[name] = ->
      OUT = _(Klass).clone()
      reset()
      OUT

    properties
  factory