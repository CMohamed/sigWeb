import {Component, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {User} from './utils/app-utils';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'Sig Web';
  connected = false;

  currentUser = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(
      (data) => {
        console.log(data);
        this.currentUser = data;
        if (this.currentUser != null) {
          console.log('tbadal current user');
          this.togle();
        }
      }
    );
  }
  login() {
    console.log('login menu');
  }
  logout() {
    this.currentUser = null;
    this.authService.currentUser.next(this.currentUser);
    this.togle();
  }
  togle() {
    this.connected = !this.connected;
  }
}
