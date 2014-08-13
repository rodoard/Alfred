define(["contexts/base", "contexts/contexts"], function(Base, Contexts) {
  var contexts;
  contexts = {
    context: function(context) {
      if (_(Contexts).has(context)) {
        return new Contexts[context]();
      } else {
        if (context) {
          return new Base(context);
        }
      }
    }
  };
  return contexts;
});
