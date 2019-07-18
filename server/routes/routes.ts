import { Express } from 'express';
import { CheckHealthController } from '../Controllers/CheckHealthController';
import { UserController } from '../Controllers/UserController';

export class Router {
  private checkHealthController: CheckHealthController = new CheckHealthController();
  private userController: UserController = new UserController();

  public routes(app: Express): void {
    app.route('/checkHealth').get(this.checkHealthController.healthTest);

    app
      .route('/user')
      .post(this.userController.addNewUser)
      .get(this.userController.listUsers);
    app
      .route('/user/:userId')
      .get(this.userController.listUserById)
      .delete(this.userController.deleteUser);
  }
}
