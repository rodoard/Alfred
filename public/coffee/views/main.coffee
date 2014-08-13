define [
  "helpers/views/itemview_factory"
  "views/tabs"
  "views/tab/section"
], (Factory, Tabs, TabSection) ->
  Factory.unwrappable().attachable().contexted().item().extend
    template: "main"
    events: {}
    addContentEvents: (content) ->
      wrapper = (handler) ->
        (evt) ->
          handler.call(@, evt)
      for event, handler of content.viewEvents
        @events[event] = wrapper(handler)

    onInitialize: ->
      process = (name) ->
        name.replace /Wow/, 'WOW'
      names = (section) ->
        process _(section).chain().humanize().titleize().value()
      tabs = []
      @tabs = null
      self = @
      recurse = (section, next) ->
        if section
          view = self.context.view(section)
          collection = new view.prototype.collection()
          collection.fetch
            success: (_collection) ->
              content =  new view
                context:self.context
                collection:_collection
              self.addContentEvents(content)
              tabs.push new TabSection
                name: names(section)
                section: section
                content: content
              recurse(_(next).first(), _(next).rest())
        else
          self.tabs = new Tabs({tabs:tabs})
      recurse("enquiries", ["wow_done", "quotes"])
      return

    onRenderUnwrap: ->
      if @tabs
        @attach @tabs, "#sections"