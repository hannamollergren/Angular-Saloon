import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lab1Angular';
  forgottenUser: boolean = false;

  handleForgetUser(event){
    console.log("app comp forgottenUser", this.forgottenUser);
    this.forgottenUser = event;
  }
  ngOnInit(){    
  }
}

