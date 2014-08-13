define (require) ->
  list =
    main: require("Main")
    customer: require("Customer")
    thankyou: require("Thankyou")
    enquiry: require("Enquiry")
  apps =
    init: ->
      for name, app of list
        if _(app.init).isFunction()
          app.init()
  apps