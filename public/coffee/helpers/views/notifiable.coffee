define ->
  notifiable =
    notify: (message) ->
      selector = @$el.find('#message')
      selector.fadeOut()
      selector.html(message)
      selector.fadeIn()
  notifiable