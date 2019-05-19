export class User {
  public username: string;
  public pass: string;
  public mail: string;
  public role: string;

  constructor() {

  }
  static userFactory(objet: any ) {
    const newUser = new User();
    newUser.username = objet.username;
    newUser.pass = objet.pass;
    newUser.mail = objet.mail;
    newUser.role = objet.role;
    return newUser;
  }
}

const api = 'http://localhost:9090/requestAny/';
