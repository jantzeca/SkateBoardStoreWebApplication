import { Request, Response } from 'express';

module.exports = {
  healthTest: (req: Request, res: Response) => res.status(200).send('Success')
};
