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
      .post((req: Request, res: Response) => {
        try {
          this.userValidation.validateCreateUser(req);
          this.userController.createUser(req, res);
        } catch (err) {
          res.status(400).send(err.message);
        }
      })
      .get(this.userController.listUsers);
    app
      .route('/user/:userId')
      .get((req: Request, res: Response) => {
        try {
          this.userValidation.validateMongoDBUniqueId(req.params.userId);
          this.userController.listUserById(req, res);
        } catch (err) {
          res.status(400).send(err.message);
        }
      })
      .delete((req: Request, res: Response) => {
        try {
          this.userValidation.validateMongoDBUniqueId(req.params.userId);
          this.userController.deleteUser(req, res);
        } catch (err) {
          res.status(400).send(err.message);
        }
      })
      .put((req: Request, res: Response) => {
        try {
          this.userValidation.validateMongoDBUniqueId(req.params.userId);
          this.userController.updateUser(req, res);
        } catch (err) {
          res.status(400).send(err.message);
        }
      });
  }
}
