require [
  "App"
  "Apis"
  "routers/AppRouter"
  "controllers/Controller"
  "helpers/apps"
  "helpers/preloadables"
], (App, Apis, AppRouter, Controller, RegisteredApps, Preloadables) ->
  App.appRouter = new AppRouter(controller: new Controller())
  Preloadables.preload()
  RegisteredApps.init()
  Apis.cache().intercept()
  App.start()
  return

