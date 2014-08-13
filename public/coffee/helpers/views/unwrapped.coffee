define [], ->
  unwrapped =
    unwrap: ->
      #Get rid of that pesky wrapping-div
      children = @$el.children()
      if children.length == 1
        if @$el.prevObject
          @$el = @$el.prevObject
        hasClass = @$el.attr('class')
        hasId = @$el.attr('id')
        if not (hasId or hasClass)
          @$el = children
          @$el.unwrap()
          @setElement(@$el)
      return
  unwrapped