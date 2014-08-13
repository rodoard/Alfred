define ["HBS"], (HBS) ->
  templates =
    template: (path, namespace) ->
      HBS[namespace || "templates"][path]
  templates
