import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  welcomeStranger: string = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
  displayWelcome: boolean = true;
  inputFirstName: string;
  inputLastName: string;
  @Input() beverageData:string[];
  displayWhatCanIdo: boolean = false;
  displayBeverages: boolean = false;
  whatCanIdo: string;
  choseBeverage: string;
  order: string; //One <chosen beverage>, coming right up!
  

  // Input FirstName
  keyFirstName(event){
    console.log("input firstname", this.inputFirstName);
    this.inputFirstName = event.target.value;
    localStorage.setItem('firstName', this.inputFirstName)
  }
  // Input LastName
  keyLastName(event){
    console.log("input lastname", this.inputLastName)
    this.inputLastName = event.target.value;
    localStorage.setItem('lastName', this.inputLastName)
  }
  // Button enterName - hämta NAMN från localStorage????
  enterName(){
    console.log('enterName');
    this.displayWelcome = false;
    this.displayWhatCanIdo = true;
    this.displayBeverages = true;
    this.whatCanIdo = "Alright " + this.inputFirstName + ", what can I do you for?";
  }
  // Tar emot BeveragesData från beverages component - skicka till localstorage
  reciveBeverages(event){
    this.beverageData = event;
    console.log('beveragesData dialogue', this.beverageData);
   
    

  }

  // Button choseBeverage - användarens dryck
  chosenBeveragesButton(event){
    this.choseBeverage = event.target.parentElement.textContent;
    console.log('chosen bev', this.choseBeverage);
    this.order = "One, " + this.choseBeverage + " coming right up!"
    this.displayWhatCanIdo = false;
    this.displayBeverages = false;
    localStorage.setItem('chosenBeverage', this.choseBeverage);    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
