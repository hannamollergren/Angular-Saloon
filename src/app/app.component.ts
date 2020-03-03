import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lab1Angular';
  welcomeStranger: string;
  displayWelcome: boolean;

  //! Forget user
  handleForgetUser(event){
    this.welcomeStranger = event;  
  }

  ngOnInit(){}
}

