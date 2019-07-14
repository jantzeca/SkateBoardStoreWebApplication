import express, { Express, Request, Response } from 'express';
import { createConnection, Connection } from 'mysql';
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

const connection: Connection = createConnection({
  host: 'localhost',
  user: `${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
  database: 'SkateBoardStore',
  port: process.env.DB_PORT
});

console.log(`Connected to db on port ${process.env.DB_PORT}`);

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
router.routes(app, connection);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req: Request, res: Response) =>
    res.sendFile(__dirname + 'public/index.html')
  );
}

const PORT: number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
