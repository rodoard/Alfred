define ->
    bindable =
      checkboxes: []

      buildCheckboxes:  ->
        for checkbox in @checkboxes
          target = @bindings[checkbox]
          checkboxOptions = @stickitHelper.checkboxOptions(target)
          @bindings[checkbox] = checkboxOptions

      postBuildBindings: () ->
        @buildCheckboxes()

      buildViewBindings: ->
        bindingParams = @model.defaults
        bindingParams = decodeURIComponent($.param(bindingParams))
        bindingParams = _.words(bindingParams, '&')
        @bindings = {}
        for param in bindingParams
          key = _.first(_.words(param, '='))
          value = key.replace /\[/g, ''
          value = value.replace /\]/g, '.'
          value = _.rtrim(value, '.')
          @bindings["[name='#{key}']"] = value

      initBindings: () ->
        @buildViewBindings()
        @postBuildBindings()

     bindable
