import { Request, Response } from 'express';

export class CheckHealthController {
  public healthTest = (req: Request, res: Response) => {
    res.status(200).send('Success');
  };
}
