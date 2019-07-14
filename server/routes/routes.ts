import { Express } from 'express';
import { Connection } from 'mysql';
import CheckHealthController from '../Controllers/CheckHealthController';

export class Router {
  public checkHealthController: CheckHealthController = new CheckHealthController();

  public routes(app: Express, db: Connection): void {
    app.route('/checkHealth').get(this.checkHealthController.healthTest);
  }
}
