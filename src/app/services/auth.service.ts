import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import * as Rx from 'rxjs';
import {User} from '../utils/app-utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  currentUser = new Rx.BehaviorSubject(null);

  getCurrentUser() {
    return this.currentUser;
  }
}
