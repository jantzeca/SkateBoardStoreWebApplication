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

  public listUsers = (callback: Function) => {
    User.find({}, (err, user) => callback(err, user));
  };

  public searchForUserByProps = (searchProps: any, callback: Function) => {
    User.find(searchProps, (err, user) => callback(err, user));
  };

  public listUserById = (id: string, callback: Function) => {
    User.findById(id, (err, user) => callback(err, user));
  };

  public deleteUser = (id: string, callback: Function) => {
    User.findByIdAndDelete(id, err => callback(err));
  };

  public updateUser = (id: string, updates: any, callback: Function) => {
    User.findOneAndUpdate({ _id: id }, updates, { new: true }, (err, user) => {
      callback(err, user);
    });
  };
}
