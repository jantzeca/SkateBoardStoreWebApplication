import { model } from 'mongoose';
import { userSchema } from '../Models/User';

const User = model('User', userSchema, 'user');

export class UserRepository {
  public createUser = (userInfo: any, response: Function) => {
    const newUser = new User(userInfo);
    newUser.save((err: any, user: any) => {
      return response(err, {
        _id: user._id,
        isAdmin: user.isAdmin,
        email: user.email,
        username: user.username
      });
    });
  };

  public listUsers = (response: Function) => {
    User.find({}, (err, user) => response(err, user));
  };

  public listUserById = (id: string, response: Function) => {
    User.findById(id, (err, user) => response(err, user));
  };

  public deleteUser = (id: string, response: Function) => {
    User.findByIdAndDelete(id, err => response(err));
  };

  public updateUser = (id: string, updates: any, response: Function) => {
    User.findOneAndUpdate({ _id: id }, updates, { new: true }, (err, user) => {
      response(err, user);
    });
  };
}
