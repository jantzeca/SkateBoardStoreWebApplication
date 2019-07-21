export class Util {
  public static isValidEmail(email: string): void {
    if (!this.getEmailRegex().test(email)) {
      throw new Error('Invalid Email');
    }
  }

  public static isValidPassword(password: string): void {
    if (!this.getPasswordRegex().test(password)) {
      throw new Error('Invalid Password');
    }
  }

  public static isValidUsername(username: string): void {
    if (!new RegExp(/^[a-zA-Z0-9]+$/).test(username)) {
      throw new Error('Invalid Username');
    }
  }

  public static isValidMongoDBId(id: string): void {
    if (!new RegExp(/^[a-f\d]{24}$/i).test(id)) {
      throw new Error('Invalid User Id');
    }
  }

  private static getEmailRegex = () =>
    new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  private static getPasswordRegex = () =>
    new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
}
