import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn : 'root'
})

export class UserService{
    userList : User[] = [];
    tempUserOne : User = new User();
    tempUserTwo : User = new User();
    tempUserThree : User = new User();

    currentUser : User;
    constructor(private _route : ActivatedRoute){
        this.tempUserOne.id = 1;
        this.tempUserOne.name = 'Akilesh Rao';
        this.tempUserOne.age = 22;
        this.tempUserOne.email='ar@gmail.co';
        this.tempUserOne.password = "artemp";
        this.userList.push(this.tempUserOne);

        this.tempUserTwo.id = 2;
        this.tempUserTwo.name = 'Sujay Sail';
        this.tempUserTwo.age = 22;
        this.tempUserTwo.email='ss@gmail.co';
        this.tempUserTwo.password = "sstemp";
        this.userList.push(this.tempUserTwo);

        this.tempUserThree.id = 3;
        this.tempUserThree.name = 'Kartik Sharma';
        this.tempUserThree.age = 21;
        this.tempUserThree.email='ks@gmail.co';
        this.tempUserThree.password = "kstemp";
        this.userList.push(this.tempUserThree);
    }

    ngOnInit(): void {
        
    }
    
    addUser(user : User){
        this.userList.push(user);
        alert("User has been Registered!");
    }

    getUser(id : number){
        return this.userList.find(user => user.id === id);
    }
}