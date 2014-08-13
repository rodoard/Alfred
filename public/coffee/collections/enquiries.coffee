define [
  "backbone"
  "models/enquiry"
], (Backbone, Enquiry) ->
   Backbone.Collection.extend
    url:"/enquiries"
    model: Enquiry