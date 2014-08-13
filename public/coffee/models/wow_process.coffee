define ["models/factory"], (Factory) ->
  Factory.fakeable().cacheable().model().extend
    url: "/wow/process"
    fakeables: []
    defaults:
      enquiry_id: ""
    validation: {}
