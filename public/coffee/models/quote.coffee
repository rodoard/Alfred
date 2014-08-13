define ["models/factory"], (Factory) ->
  Factory.fakeable().cacheable().model().extend
    url: "/quotes/sent"
    fakeables: []
    defaults:
     enquiry_id: ""
    validation: {}
