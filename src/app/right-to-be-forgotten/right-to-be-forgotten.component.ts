import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  welcomeStranger: string;
  displayWelcome: boolean; // Skicka till dialogue


  forgetButton(){
    console.log("forget comp click");
    this.welcomeStranger = "Got it! Who are you again?"
    console.log("right to forgotten comp", this.welcomeStranger);
    this.displayWelcome = true;
    this.beverageService.deleteLocalStorage();
    this.forgetUser.emit(this.welcomeStranger);
   /*  this.displayForgotten.emit(this.displayWelcome);  */
  }
  @Output()forgetUser = new EventEmitter<string>(); 
  /* @Output()displayForgotten = new EventEmitter<boolean>();  */  

  constructor(public beverageService: DataService) { }

  ngOnInit(): void {
    
  }

}
