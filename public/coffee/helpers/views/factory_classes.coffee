define (require) ->
  klasses =
    item: require("helpers/views/itemview")
    layout: require("helpers/views/layout")
    composite: require("helpers/views/composite")
    collection: require("helpers/views/collection")
  klasses