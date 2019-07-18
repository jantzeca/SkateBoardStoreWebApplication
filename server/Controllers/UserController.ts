import { Request, Response } from 'express';
import { UserRepository } from '../Repository/UserRepository';

export class UserController {
  private userRepository: UserRepository = new UserRepository();

  public addNewUser = (req: Request, res: Response) => {
    this.userRepository.createUser(req.body, (err: any, result: any) => {
      err ? res.status(500).send(err) : res.status(200).json(result);
    });
  };

  public getUsers = (req: Request, res: Response) => {
    this.userRepository.getAllUsers((err: any, result: any) => {
      err ? res.status(500).send(err) : res.status(200).json(result);
    });
  };

  public getUserById = (req: Request, res: Response) => {
    this.userRepository.getUserById(
      req.params.userId,
      (err: any, result: any) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
      }
    );
  };
}
