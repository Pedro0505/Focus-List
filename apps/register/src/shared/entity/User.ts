export default class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(id: string, name: string, password: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  public get getId(): string {
    return this._id;
  }

  public set setId(id: string) {
    this._id = id;
  }

  public get getName(): string {
    return this._name;
  }

  public set setName(name: string) {
    this._name = name;
  }

  public get getEmail(): string {
    return this._email;
  }

  public set setEmail(email: string) {
    this._email = email;
  }

  public get getPassword(): string {
    return this._password;
  }

  public set setPassword(password: string) {
    this._password = password;
  }
}
