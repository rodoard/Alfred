define ->
  selectable =
    selected:(elem, klass) ->
      @$el.find(klass).removeClass "selected"
      elem.addClass "selected"
  selectable