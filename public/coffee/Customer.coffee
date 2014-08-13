define ["helpers/apps/factory", "views/customer"], (Factory, CustomerView) ->
  Factory.create("customer", CustomerView)
