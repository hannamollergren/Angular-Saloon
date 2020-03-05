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
    this.welcomeStranger = "Got it! Who are you again?";
    //this.displayWelcome = true;
    console.log("forget comp click");
    console.log("right to forgotten comp", this.welcomeStranger);
    this.beverageService.deleteLocalStorage();
    this.forgetUser.emit(true);
  }
  
  @Output()forgetUser = new EventEmitter<boolean>(); 
 

  constructor(public beverageService: DataService) { }

  ngOnInit(): void {
    
  }

}
