define ->
  stickit =
    checkboxOptions: (target) ->
      observe: target
      onGet: (val) ->
        if val is "true"  or val is true
         true
        else
         false
    selectOptions: (target, collection, defaultLabel) ->
      observe: target
      selectOptions:
        collection: ->
          collection
        defaultOption:
          label: defaultLabel || "Choose one..."
          value:null
  stickit
