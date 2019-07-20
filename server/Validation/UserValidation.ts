import { Request } from 'express';
import { Util } from './Utils/Util';

export class UserValidation {
  private Util: Util = new Util();

  public validateCreateUser(req: Request): void {
    const { email, username, password, isAdmin } = req.body;
    if (email && username && password && typeof isAdmin === 'boolean') {
      this.Util.isValidEmail(email);
      this.Util.isValidUsername(username);
      this.Util.isValidPassword(password);
      if (typeof isAdmin !== 'boolean')
        throw new Error('isAdmin must be a boolean');
    } else {
      throw new Error('Bad Request. Missing at least one required field.');
    }
  }

  public validateUpdateUser(req: Request): void {
    const { email, username, password, isAdmin } = req.body;
    if (email) this.Util.isValidEmail(email);
    if (username) this.Util.isValidUsername(username);
    if (password) this.Util.isValidPassword(password);
    if (typeof isAdmin !== 'boolean')
      throw new Error('isAdmin must be a boolean');
  }

  public validateMongoDBUniqueId(userId: string): void {
    this.Util.isValidMongoDBId(userId);
  }
}
