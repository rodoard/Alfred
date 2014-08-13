define(function(require) {
  var add, api, apis, list, name;
  list = {
    cache: require("api/cache")
  };
  apis = {};
  add = function(name, api) {
    return apis[name] = function() {
      return api;
    };
  };
  for (name in list) {
    api = list[name];
    add(name, api);
  }
  return apis;
});
