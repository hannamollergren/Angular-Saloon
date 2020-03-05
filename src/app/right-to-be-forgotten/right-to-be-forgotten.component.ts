import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  welcomeStranger: string;
  displayWelcome: boolean; // Skicka till dialogue
  @Input() order: string;


  forgetButton(){
    this.welcomeStranger = "Got it! Who are you again?";
    this.order = "";
    this.beverageService.deleteLocalStorage();
    this.forgetUser.emit(true);
    this.forgetUserText.emit(this.welcomeStranger)
  }
  
  @Output()forgetUser = new EventEmitter<boolean>();
  @Output() forgetUserText = new EventEmitter<string>(); 
 

  constructor(public beverageService: DataService) { }

  ngOnInit(): void {
    
  }

}
