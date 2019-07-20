import { Schema } from 'mongoose';

export const ShippingInfo = new Schema({
  fname: {
    type: String,
    required: 'Must enter a first name'
  },
  lname: {
    type: String,
    required: 'Must enter a last name'
  },
  country: {
    type: String,
    required: 'Must enter a country to ship to'
  },
  streetAddress: {
    type: String,
    required: 'Must enter a street address'
  },
  additionalInfo: {
    type: String
  },
  city: {
    type: String,
    required: 'Must enter a city or town'
  },
  state: {
    type: String,
    required: 'Must enter a state'
  },
  zip: {
    type: Number,
    required: 'Must enter a postal zip code'
  },
  phone: {
    type: String,
    required: 'Must enter your phone number'
  },
  email: {
    type: String,
    required: 'Must enter your email address'
  },
  orderNotes: {
    type: String
  }
});
