define(["helpers/views/itemview_factory"], function(Factory) {
  var processEnquiry;
  processEnquiry = function(evt) {
    var enquiry_id;
    evt.stopPropagation();
    enquiry_id = $(evt.currentTarget).data('enquiry-id');
    return this.context.execute("process:enquiry", enquiry_id);
  };
  return Factory.item().extend({
    template: "main/enquiries/enquiry",
    viewEvents: {
      "click a.process": processEnquiry
    }
  });
});
