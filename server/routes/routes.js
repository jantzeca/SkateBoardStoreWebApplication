const checkHealthController = require('../Controllers/CheckHealthController');
const routes = (app, db) => {
  app.route('/checkhealth').get(checkHealthController.healthTest);
};

module.exports = {
  routes
};
