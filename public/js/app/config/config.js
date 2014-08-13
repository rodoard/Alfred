require.config({
  baseUrl: "./js/app",
  map: {
    "*": {
      "validation": "backbone.validation",
      "localstorage": "backbone.localStorage",
      "nested": "nested_model"
    }
  },
  paths: {
    jquery: "../libs/jquery",
    semantic: "../libs/semantic",
    faker: "../libs/Faker",
    "underscore.string": "../libs/underscore.string",
    lodash: "../libs/lodash",
    underscore: "../libs/underscore",
    backbone: "../libs/backbone",
    marionette: "../libs/backbone.marionette",
    bootstrap: "../libs/bootstrap",
    "handlebars.runtime": "../libs/handlebars.runtime.amd",
    "preloader.handlebars.runtime": "../libs/preloader.handlebars.runtime",
    handlebars: "../libs/handlebars.amd",
    "backbone.stickit": "../libs/backbone-stickit",
    "backbone.validation": "../libs/backbone-validation",
    "backbone.localStorage": "../libs/backbone-localStorage",
    "nested_model": "../libs/backbone-nested",
    "bootstrap_validation": "../libs/bootstrap_validation",
    text: "../libs/plugins/text"
  },
  shim: {
    "bootstrap": ["jquery"],
    "faker": {
      exports: "faker"
    },
    "bootstrap_validation": ["backbone.validation"],
    "nested_model": {
      "deps": ["backbone"],
      "exports": "Backbone.NestedModel"
    },
    backbone: {
      deps: ["underscore"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["underscore", "backbone", "jquery"],
      exports: "Marionette"
    }
  }
});
