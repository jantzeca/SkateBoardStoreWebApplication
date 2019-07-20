import { Request, Response } from 'express';
import { UserRepository } from '../Repository/UserRepository';
import { UserValidation } from '../Validation/UserValidation';

export class UserController {
  private userRepository: UserRepository = new UserRepository();
  private userValidation: UserValidation = new UserValidation();

  public createUser = (req: Request, res: Response) => {
    try {
      this.userValidation.validateCreateUser(req);
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

  public searchForUserByProps = (req: Request, res: Response) => {
    try {
      this.userValidation.validateOperateOnExistingUser(req);
      this.userRepository.searchForUserByProps(
        req.body,
        (err: any, result: any) => {
          err ? res.status(500).send(err) : res.status(200).json(result);
        }
      );
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  public listUserById = (req: Request, res: Response) => {
    try {
      this.userValidation.validateMongoDBUniqueId(req.params.userId);
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
      this.userValidation.validateMongoDBUniqueId(req.params.userId);
      this.userRepository.deleteUser(req.params.userId, (err: any) => {
        err ? res.status(500).send(err) : res.status(200).send('User deleted');
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  };

  public updateUser = (req: Request, res: Response) => {
    try {
      this.userValidation.validateMongoDBUniqueId(req.params.userId);
      this.userValidation.validateOperateOnExistingUser(req);
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
