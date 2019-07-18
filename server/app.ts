import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import('dotenv').then(dotenv => dotenv.config());
import { Router } from './routes/routes';

declare const process: {
  env: {
    DB_PORT: number;
    PORT: number;
    USER: string;
    PASSWORD: string;
    NODE_ENV: string;
  };
};

mongoose
  .connect(`mongodb://localhost/skateshop`, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const app: Express = express();
app.use(express.json());
app.use((req: Request, res: Response, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const router: Router = new Router();
router.routes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req: Request, res: Response) =>
    res.sendFile(__dirname + 'public/index.html')
  );
}

const PORT: number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
