import { model, Model, Document } from 'mongoose';
import { userSchema } from '../Models/User';

const User = model('User', userSchema, 'user');

export class UserRepository {
  public createUser = (userInfo: any, response: Function) => {
    const newUser = new User(userInfo);
    console.log(newUser);
    newUser.save((err: any, user: any) => {
      return response(err, {
        fname: user.fname,
        lname: user.lname,
        age: user.age
      });
    });
  };
}
