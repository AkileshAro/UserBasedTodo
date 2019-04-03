import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {
  listOfUsers : User[];
  constructor(private _userService : UserService) { 
    this.listOfUsers = this._userService.userList;
    console.log(this.listOfUsers);
  }

  ngOnInit() {

  }
  
}
