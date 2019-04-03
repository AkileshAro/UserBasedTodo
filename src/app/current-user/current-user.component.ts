import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  user : User;
  taskList : string[] = [];
  task : string;
  constructor(private _route:ActivatedRoute,
    private _userService : UserService,
    private _router : Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.user = this._userService.getUser(id);
  }

  addTask(taskVal){
    this.task = taskVal.value;
    this.taskList.push(this.task);
  }

  deleteTask(val){
    this.taskList.splice(this.taskList.indexOf(val), 1);
  }

  logout(){
    this._router.navigate(['/login']);
  }
} 
