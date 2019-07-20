import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
  isAdmin: {
    type: Boolean,
    required: 'Must define if this user is an admin'
  },
  email: {
    type: String,
    required: 'Must provide your email address'
  },
  username: {
    type: String, // query to see if there exists a user that has this username on creation
    required: 'Must have a username'
  },
  password: {
    type: String, // do some kind of hashing here when adding a password
    required: 'Must have a password'
  }
});
