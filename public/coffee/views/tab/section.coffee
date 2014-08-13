define [
  "helpers/views/itemview_factory"
  "backbone"
], (Factory, Backbone) ->
  Factory.attachable().item().extend
    template: "tab/section"
    initialize: (options) ->
      @_name = options.name
      @_section = options.section
      @model = new Backbone.Model
        section: @_section
      @_content = options.content
    events:
      click: ""
    section: ->
      @_section
    name: ->
      @_name
    content: ->
      @render()
      @$el.html()
    onRender: ->
      content = @._content.render().$el.html()
      @$('#'+ this.section()).html(content)
