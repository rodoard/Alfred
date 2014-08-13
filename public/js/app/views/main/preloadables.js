define(function(require) {
  var preloadables;
  preloadables = {
    enquiries: require("views/main/enquiries/received"),
    wow_done: require("views/main/wow/done"),
    wow_process: require("views/main/wow/process"),
    quotes: require("views/main/quotes/sent"),
    quote: require("views/main/quotes/quote"),
    enquiry: require("views/main/enquiries/enquiry"),
    main: require("views/main")
  };
  return preloadables;
});
