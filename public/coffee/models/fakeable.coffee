define ["models/faker"], (Faker) ->
  _fakeable =
    fakeables:[]
    fake: ->
      for fakeable in @fakeables
        @set(fakeable, Faker.fake(fakeable))
      return
  _fakeable