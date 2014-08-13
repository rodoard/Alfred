define(["helpers/apps/factory", "views/process/enquiry", "Channels", "models/enquiry"], function(Factory, EnquiryProcessView, Channel, Enquiry) {
  var enquiry, main;
  enquiry = Factory.create("enquiry_process", EnquiryProcessView);
  main = Channel.chanel("main");
  main.commands.setHandler("process:enquiry", function(enquiry_id) {
    var model;
    model = new Enquiry({
      id: enquiry_id
    });
    return model.fetch({
      success: function(model) {
        enquiry.context.model = model;
        return main.router.nav('enquiry');
      }
    });
  });
  return enquiry;
});
