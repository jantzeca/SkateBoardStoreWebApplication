import { Request } from 'express';
import { Util } from './Utils/Util';

export class UserValidation {

  public static validateCreateUser(req: Request): void {
    const { email, username, password, isAdmin } = req.body;
    if (email && username && password && typeof isAdmin === 'boolean') {
      Util.isValidEmail(email);
      Util.isValidUsername(username);
      Util.isValidPassword(password);
      if (typeof isAdmin !== 'boolean')
        throw new Error('isAdmin must be a boolean');
    } else {
      throw new Error('Bad Request. Missing at least one required field.');
    }
  }

  public static validateOperateOnExistingUser(req: Request): void {
    const { email, username, password, isAdmin } = req.body;
    if (email) Util.isValidEmail(email);
    if (username) Util.isValidUsername(username);
    if (password) Util.isValidPassword(password);
    if (typeof isAdmin !== 'boolean')
      throw new Error('isAdmin must be a boolean');
  }

  public static validateMongoDBUniqueId(userId: string): void {
    Util.isValidMongoDBId(userId);
  }
}
