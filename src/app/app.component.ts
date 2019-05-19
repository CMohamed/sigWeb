import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {User} from './utils/app-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Sig Web';
  connected = false;

  currentUser = null;
  togle() {
    this.connected = !this.connected;
  }
}
