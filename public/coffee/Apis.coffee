define (require) ->
  list =
    cache: require("api/cache")
  apis = {}
  add = (name, api) ->
    apis[name] = ->
      api
  for name, api of list
    add name, api
  apis