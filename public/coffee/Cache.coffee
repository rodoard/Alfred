define [
  "cache/model"
  'cache/collection'
], (CacheModel, Collection) ->
  Store = new Collection()
  cache =
    get: (id) ->
      record = Store.get({id:id})
      record.data if record
    find: (condition) ->
      records = _(Store.find(condition)).map (record) ->
        model = new CacheModel(record)
        model.json()
      records
    create: (type, data) ->
      model = new CacheModel
        type:type
        data:data
      model.id = data.id if data.id
      Store.create(model).json()
  cache