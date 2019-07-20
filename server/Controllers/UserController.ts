import { Request, Response } from 'express';
import { UserRepository } from '../Repository/UserRepository';

export class UserController {
  private userRepository: UserRepository = new UserRepository();

  public createUser = (req: Request, res: Response) => {
    this.userRepository.createUser(req.body, (err: any, result: any) => {
      err ? res.status(500).send(err) : res.status(200).json(result);
    });
  };

  public listUsers = (req: Request, res: Response) => {
    this.userRepository.listUsers((err: any, result: any) => {
      err ? res.status(500).send(err) : res.status(200).json(result);
    });
  };

  public listUserById = (req: Request, res: Response) => {
    this.userRepository.listUserById(
      req.params.userId,
      (err: any, result: any) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
      }
    );
  };

  public deleteUser = (req: Request, res: Response) => {
    this.userRepository.deleteUser(req.params.userId, (err: any) => {
      err ? res.status(500).send(err) : res.status(200).send('User deleted');
    });
  };

  public updateUser = (req: Request, res: Response) => {
    this.userRepository.updateUser(
      req.params.userId,
      req.body,
      (err: any, result: any) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
      }
    );
  };
}
