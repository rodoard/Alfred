define (require) ->
  preloadables =
    enquiry: require "views/process/enquiry"
    customer: require "views/customer"
    thankyou: require "views/thankyou"
    tabs: require "views/tabs"
    tab_section:require "views/tab/section"
  preloadables
