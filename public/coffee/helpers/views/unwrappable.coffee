define ['helpers/views/unwrapped'], (Unwrapped) ->
  unwrappable =
    onRenderUnwrap: ->
    onRender: ->
      @onRenderUnwrap()
      @unwrap()
  _.extend(unwrappable, Unwrapped)
  unwrappable