define(["helpers/views/factory_classes", "helpers/views/contexted", "helpers/views/updateable_model", "helpers/views/updateable_collection", "helpers/views/unwrappable", "helpers/views/subviews_initializable", "helpers/views/attachable", "helpers/views/selectable", "helpers/views/stickerable", "helpers/views/validatable", "helpers/views/notifiable", "helpers/views/self_updateable"], function(Klasses, Contexted, UpdateableModel, UpdateableCollection, Unwrappable, SubViewsInitializable, Attachable, Selectable, Stickerable, Validatable, Notifiable, SelfUpdateable) {
  var factory;
  factory = function(name) {
    var Klass, Original, properties, reset;
    Klass = "";
    Original = Klasses[name];
    reset = function() {
      Klass = _(Original).clone();
    };
    reset();
    properties = {
      klass: function(update) {
        if (update) {
          Klass = update;
        }
        return Klass;
      },
      contexted: function() {
        Klass = Klass.extend(Contexted);
        return this;
      },
      selectable: function() {
        Klass = Klass.extend(Selectable);
        return this;
      },
      attachable: function() {
        Klass = Klass.extend(Attachable);
        return this;
      },
      editable: function() {
        Klass = Klass.extend(Editable);
        return this;
      },
      self_updateable: function() {
        Klass = Klass.extend(SelfUpdateable);
        return this;
      },
      updateable_collection: function() {
        Klass = Klass.extend(UpdateableCollection);
        return this;
      },
      updateable: function() {
        return this.updateable_model();
      },
      stickerable: function() {
        Klass = Klass.extend(Stickerable);
        return this;
      },
      notifiable: function() {
        Klass = Klass.extend(Notifiable);
        return this;
      },
      validatable: function() {
        Klass = Klass.extend(Validatable);
        return this;
      },
      updateable_model: function() {
        Klass = Klass.extend(UpdateableModel);
        return this;
      },
      subViewsInitializable: function() {
        Klass = Klass.extend(SubViewsInitializable);
        return this;
      },
      unwrappable: function() {
        Klass = Klass.extend(Unwrappable);
        return this;
      }
    };
    properties[name] = function() {
      var OUT;
      OUT = _(Klass).clone();
      reset();
      return OUT;
    };
    return properties;
  };
  return factory;
});
