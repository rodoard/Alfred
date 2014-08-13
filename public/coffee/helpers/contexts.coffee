define [
  "contexts/base"
  "contexts/contexts"
], (Base, Contexts) ->
  contexts =
    context: (context) ->
      if _(Contexts).has(context)
        new Contexts[context]()
      else
        if context
          new Base(context)
  contexts