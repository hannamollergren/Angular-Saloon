import { Component, Input, Output, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lab1Angular';
  welcomeStranger: string;
  displayWelcome: boolean;

  handleForgetUser(willPrintWelcome: boolean){
    this.displayWelcome = willPrintWelcome;   
  }
  userDidLogIn(){
    this.displayWelcome =  false; 
  }

  constructor(public dataService: DataService) {}

  ngOnInit(){
     if(this.dataService.getFirstName() == null){
      this.displayWelcome = true;
    }
    
  }
}

