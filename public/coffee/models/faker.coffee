define ["faker"], (Faker) ->
  fakeables =
    phone:->
      Faker.PhoneNumber.phoneNumber()
    email: ->
      Faker.Internet.email()
    dob: (atleast) ->
      from = new Date()
      Faker.Date.past(20, from - 18)
    name: ->
      Faker.Name.findName()
  faker =
    fake: (attribute) ->
      if _(fakeables[attribute]).isFunction()
        fakeables[attribute]()
  faker