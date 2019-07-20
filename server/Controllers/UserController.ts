import { Request, Response } from 'express';
import { UserRepository } from '../Repository/UserRepository';
import { UserValidation } from '../Validation/UserValidation';

export class UserController {
  private userRepository: UserRepository = new UserRepository();
  private UserValidation: UserValidation = new UserValidation();

  public createUser = (req: Request, res: Response) => {
    try {
      this.UserValidation.validateCreateUser(req);
      this.userRepository.createUser(req.body, (err: any, result: any) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  public listUsers = (req: Request, res: Response) => {
    this.userRepository.listUsers((err: any, result: any) => {
      err ? res.status(500).send(err) : res.status(200).json(result);
    });
  };

  public listUserById = (req: Request, res: Response) => {
    try {
      this.UserValidation.validateMongoDBUniqueId(req.params.userId);
      this.userRepository.listUserById(
        req.params.userId,
        (err: any, result: any) => {
          err ? res.status(500).send(err) : res.status(200).json(result);
        }
      );
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  public deleteUser = (req: Request, res: Response) => {
    try {
      this.UserValidation.validateMongoDBUniqueId(req.params.userId);
      this.userRepository.deleteUser(req.params.userId, (err: any) => {
        err ? res.status(500).send(err) : res.status(200).send('User deleted');
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  public updateUser = (req: Request, res: Response) => {
    try {
      this.UserValidation.validateMongoDBUniqueId(req.params.userId);
      this.userRepository.updateUser(
        req.params.userId,
        req.body,
        (err: any, result: any) => {
          err ? res.status(500).send(err) : res.status(200).json(result);
        }
      );
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
}
