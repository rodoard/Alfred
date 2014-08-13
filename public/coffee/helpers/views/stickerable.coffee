define (require) ->
  stickerable =
    stickitInit: ->
      Bindable = require("helpers/views/bindable")
      Stickit = require("helpers/views/stickit")
      require("backbone.stickit")
      _(@).extend(Bindable,Stickit)
      @initBindings()
  stickerable