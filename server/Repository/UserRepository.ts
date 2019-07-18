import { model } from 'mongoose';
import { userSchema } from '../Models/User';

const User = model('User', userSchema, 'user');

export class UserRepository {
  public createUser = (userInfo: any, response: Function) => {
    const newUser = new User(userInfo);
    newUser.save((err: any, user: any) => {
      return response(err, {
        fname: user.fname,
        lname: user.lname,
        age: user.age
      });
    });
  };

  public getAllUsers = (response: Function) => {
    User.find({}, (err, user) => response(err, user));
  };

  public getUserById = (id: string, response: Function) => {
    User.findById(id, (err, user) => response(err, user));
  };
}
