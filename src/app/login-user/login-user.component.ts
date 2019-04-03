import { Component, OnInit, Output } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user : User = new User();x
  listOfUsers : User[];
  constructor(private _userService : UserService,
    private _router : Router) { 
    this.listOfUsers = this._userService.userList;
    
  }

  ngOnInit() {
  }
  
  loginUser(){
    for(let i =0; i< this.listOfUsers.length;i++){
      if((this.user.id === this.listOfUsers[i].id) && (this.user.password === this.listOfUsers[i].password)){
        alert('Login Successful');
        this._router.navigate(['/login', this.user.id]);
        break;
      }else if(((this.user.id !== this.listOfUsers[i].id) || (this.user.password !== this.listOfUsers[i].password))){
        alert('Incorrect Password');
        break;
      }
    }
  }


}
