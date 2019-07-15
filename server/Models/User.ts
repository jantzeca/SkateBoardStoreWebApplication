import { Schema } from 'mongoose';

export const userSchema = new Schema({
  fname: {
    type: String,
    required: 'Must enter a first name'
  },
  lname: {
    type: String,
    required: 'Must enter a last name'
  },
  age: {
    type: Number,
    required: 'Must enter an age'
  }
});
