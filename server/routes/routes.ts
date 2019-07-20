import { Express, Request, Response } from 'express';

// Controllers
import { CheckHealthController } from '../Controllers/CheckHealthController';
import { UserController } from '../Controllers/UserController';

// Validation
import { UserValidation } from '../Validation/UserValidation';

export class Router {
  private checkHealthController: CheckHealthController = new CheckHealthController();
  private userController: UserController = new UserController();
  private userValidation: UserValidation = new UserValidation();

  public routes(app: Express): void {
    app.route('/checkHealth').get(this.checkHealthController.healthTest);

    app
      .route('/user')
      .post(this.userController.createUser)
      .get(this.userController.listUsers);
    app
      .route('/user/:userId')
      .get(this.userController.listUserById)
      .delete(this.userController.deleteUser)
      .put(this.userController.updateUser);
  }
}
