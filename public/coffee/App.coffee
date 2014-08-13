define [
  "backbone"
  "jquery"
  "marionette"
  "underscore"
  "bootstrap"
], (Backbone) ->
  isMobile = ->
    ua = (navigator.userAgent or navigator.vendor or window.opera window window.document)
    (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test ua
  App = new Backbone.Marionette.Application()
  App.addRegions
    app: "#app"
    header: "#header"
    main: "#main"

  App.mobile = isMobile()
  App.addInitializer (options) ->
    Backbone.history.start()
    return
  App
