define ["models/factory"], (Factory) ->
  Factory.fakeable().cacheable().model().extend
    url: "/enquiry"
    fakeables: [
      'name'
      'email'
      'phone'
      'dob'
    ]
    defaults:
      name: ""
      email: ""
      phone: ""
      nationality: ""
      dob: ""
      years_uae_drivers_license: ""
      car: ""
      car_year_manufacture: ""
      car_value: ""
      car_insurance_company: ""
      claims_history: ""
      urgent: ""
      promo_code: ""
    validation:
      name:
        required: true
      email:
        required: true
      phone:
        required: true


