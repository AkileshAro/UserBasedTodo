import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user : User;
  constructor(private _userService : UserService, private _router : Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  registerUser(formStatus){
    if(formStatus){
      alert('Form filled incorrectly');
      return false;
    }
    this._userService.addUser(this.user);
    this._router.navigate(['/list-of-users']);
  }
}
