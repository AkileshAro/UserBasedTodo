import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists : boolean = false;
  userName : string;
  constructor(private _route : ActivatedRoute){
  }

  ngOnInit(): void {
  }

  onActivate(x){
    if(x.listOfUsers){
      this.userExists = true;
      console.log(x);
    }
  }
}
