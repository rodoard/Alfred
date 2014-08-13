define ->
  renderHtml = (view) ->
    view.render().$el.html()
  region = (regionName) ->
    if regionName
      @$el.find(regionName)
    else
      @$el
  _attach = (view, selector) ->
    region.call(@, selector).html(renderHtml(view))
  attachable =
    attach: (view, selector) ->
      _attach.call(@, view, selector)
    attachSubviews: ->
      models = @models || {}
      regions = @regions || {}
      views = @subViews || {}
      for regionName, selector of regions
        options = {}
        viewClass = views[regionName]
        if viewClass
          model = models[regionName]
          if model
            options.model = model
          view = new viewClass(options)
          _attach.call(@, selector, view)
      return
  attachable