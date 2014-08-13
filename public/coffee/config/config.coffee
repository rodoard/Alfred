require.config
  baseUrl: "./js/app"
  map:
    "*":
      "validation": "backbone.validation"
      "localstorage": "backbone.localStorage"
      "nested": "nested_model"

# 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
# probably a good idea to keep version numbers in the file names for updates checking
  paths:

  # Core Libraries
    jquery: "../libs/jquery"
    semantic: "../libs/semantic"
    faker: "../libs/Faker"
    "underscore.string": "../libs/underscore.string"
    lodash: "../libs/lodash"
    underscore: "../libs/underscore"
    backbone: "../libs/backbone"
    marionette: "../libs/backbone.marionette"
    bootstrap: "../libs/bootstrap"
    "handlebars.runtime": "../libs/handlebars.runtime.amd"
    "preloader.handlebars.runtime": "../libs/preloader.handlebars.runtime"
    handlebars: "../libs/handlebars.amd"
    "backbone.stickit": "../libs/backbone-stickit"
    "backbone.validation": "../libs/backbone-validation"
    "backbone.localStorage": "../libs/backbone-localStorage"
    "nested_model": "../libs/backbone-nested"
    "bootstrap_validation": "../libs/bootstrap_validation"

  # Plugins
    text: "../libs/plugins/text"

  # Sets the configuration for your third party scripts that are not AMD compatible
  shim:
    "bootstrap": ["jquery"]
    "faker":
      exports: "faker"
    #bootstrap callbacks
    "bootstrap_validation": ["backbone.validation"]
    "nested_model":
      "deps": ["backbone"]
      "exports": "Backbone.NestedModel"

    backbone:
      deps: ["underscore"]
      # Exports the global window.Backbone object
      exports: "Backbone"

    marionette:
      deps: [
        "underscore"
        "backbone"
        "jquery"
      ]
      # Exports the global window.Marionette object
      exports: "Marionette"
