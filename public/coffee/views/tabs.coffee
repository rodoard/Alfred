define [
  "helpers/views/itemview_factory"
  "helpers/templates"
], (Factory, Templates) ->
  Factory.unwrappable().attachable().item().extend
    template: "tabs"
    events:
      "click a.tab": "tabShow"
    tabShow: (evt) ->

    initialize: ({@tabs}) ->
    find: (selector) ->
      @$(selector)
    nav_tabs: ->
      @find('.nav-tabs')
    tab_content: ->
      @find('.tab-content')
    addContent: (tab) ->
      $(@tab_content()).append(tab.content())
      return
    addTab: (tab) ->
      name = tab.name()
      section = tab.section()
      template = Templates.template "tab/nav"
      nav = template({name: name, section:section})
      $(@nav_tabs()).append(nav)
      return
    addTabs: (tabs) ->
      self = @
      _(tabs).each (tab) ->
        self.addTab(tab)
        self.addContent(tab)
    onRender: ->
      unless @tabs.length == 0
        @addTabs(@tabs)
