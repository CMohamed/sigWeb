import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../utils/app-utils';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() userChange: EventEmitter<any> = new EventEmitter<any>();
  username = '';
  pass = '';
  hide = true;

  user: User ;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  userChangerd() {
    this.userChange.emit(this.user);
  }
  submit() {
    this.userService.getUser(this.username, this.pass).subscribe(
      (response: any) => {
        if ( response.features.length === 0 ) {
          alert('there is no user with this name and pass');
        } else {
          console.log(this.user);
          this.user = User.userFactory(response.features[0]);
          alert('hello ' + this.user.mail);
          console.log(this.user);
          this.authService.currentUser.next(this.user);
          this.router.navigate(['home']);
        }
      }
    );
  }
}
