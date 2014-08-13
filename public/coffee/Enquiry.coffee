define ["helpers/apps/factory", "views/process/enquiry", "Channels", "models/enquiry"], (Factory, EnquiryProcessView, Channel, Enquiry) ->
  enquiry = Factory.create("enquiry_process", EnquiryProcessView)
  main = Channel.chanel("main")
  main.commands.setHandler "process:enquiry", (enquiry_id) ->
    model = new Enquiry({id:enquiry_id})
    model.fetch success: (model) ->
      enquiry.context.model = model
      main.router.nav('enquiry')
  enquiry
