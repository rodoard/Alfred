define [
  "helpers/views/itemview_factory"
], (Factory) ->
  processEnquiry = (evt) ->
    evt.stopPropagation()
    enquiry_id = $(evt.currentTarget).data('enquiry-id')
    @context.execute("process:enquiry", enquiry_id)
  Factory.item().extend
    template: "main/enquiries/enquiry"
    viewEvents:
      "click a.process": processEnquiry
