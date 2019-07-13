import { Express } from 'express';
import { Connection } from 'mysql';

const checkHealthController = require('../Controllers/CheckHealthController');

const routes = (app: Express, db: Connection) => {
  app.route('/checkhealth').get(checkHealthController.healthTest);
};

module.exports = {
  routes
};
