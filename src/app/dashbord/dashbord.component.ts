import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../utils/app-utils';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  mode = 'Ajouter';

  allUsers: any = null;
  user: User = new User();

  Roles = [
    'Admin',
    'Partenaire',
    'Public',
  ];

  constructor(private userServices: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser() {
    this.mode = 'Ajouter';
  }
  updateUser(u) {
    this.mode = 'Modifier';
    this.user = u;
    console.log(u.id);
  }

  getUsers() {
    this.allUsers = null;
    this.userServices.getUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.allUsers = response.features;
      }
    );
  }

  saveUser() {
    console.log('saveUser begin');
    if (this.mode === 'Ajouter') {
      console.log('ajout begin');
      console.log(this.user);
      this.userServices.addUser(this.user).subscribe(
        (respons) => {
          console.log('user added succefuly');
          this.getUsers();
        }
      );

    } else {
      this.userServices.updateUser(this.user).subscribe(
        (response: any) => {
          console.log('done');
          this.getUsers();
        }
      );
    }
  }
  delet(user) {
   this.userServices.getUsers();
  }
}
