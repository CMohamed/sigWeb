import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const api = 'http://localhost:9090/requestAny/';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  addUser(user) {
    const query = 'INSERT INTO utilisateur (username, pass, mail, role)' +
      'VALUES (\'' + user.username + '\', \'' + user.pass + '\', \'' + user.mail + '\', \'' + user.role + '\')' ;
    return this.http.get(api + query);
  }
  updateUser(u) {
    const query = 'UPDATE utilisateur ' +
      'SET username = \'' + u.username + '\', pass = \'' + u.pass + '\', mail = \'' + u.mail + '\', role = \'' + u.role +
      '\' WHERE id=' + u.id ;
    return this.http.get(api + query);
  }
  delet(user) {
    const query = 'DELETE FROM utilisateur WHERE id=' + user.id;
    return this.http.get(api + query);
  }
  getUsers() {
    const query = 'select * from utilisateur';
    return this.http.get(api + query);
  }
  getUser(username, pass) {
    const query = 'select * from utilisateur where username = \'' + username + '\' and pass = \'' + pass + '\'';
    return this.http.get(api + query);
  }
}
