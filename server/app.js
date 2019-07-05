const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const routes = require('./routes/routes').routes;

// Create a .env file in the root directory with USERNAME={mongoUserName}, PASSWORD={mongoUserPassword}
const db = `mongodb://${process.env.USERNAME}:${
  process.env.PASSWORD
}@ds347367.mlab.com:47367/skateboard_shop`;

const app = express();
app.use(express.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

routes(app, db);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'skateboard-store', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
