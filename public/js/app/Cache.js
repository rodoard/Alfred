define(["cache/model", 'cache/collection'], function(CacheModel, Collection) {
  var Store, cache;
  Store = new Collection();
  cache = {
    get: function(id) {
      var record;
      record = Store.get({
        id: id
      });
      if (record) {
        return record.data;
      }
    },
    find: function(condition) {
      var records;
      records = _(Store.find(condition)).map(function(record) {
        var model;
        model = new CacheModel(record);
        return model.json();
      });
      return records;
    },
    create: function(type, data) {
      var model;
      model = new CacheModel({
        type: type,
        data: data
      });
      if (data.id) {
        model.id = data.id;
      }
      return Store.create(model).json();
    }
  };
  return cache;
});
