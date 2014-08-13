define ["contexts/base"], (Base) ->
  _chanels = {}
  chanels =
    chanel: (name) ->
      if !_(_chanels).has(name)
        _chanels[name] = new Base(name)
      _chanels[name]
  chanels

