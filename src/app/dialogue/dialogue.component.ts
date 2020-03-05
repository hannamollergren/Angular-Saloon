import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Beverage } from '../beverage';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  @Input() displayWelcome: boolean = true;
  @Output() userDidLogIn = new EventEmitter<void>();
  @Input() welcomeStranger: string;
  inputFirstName: string = "name";
  inputLastName: string;
  @Input() beverageData: Beverage[];
  displayWhatCanIdo: boolean = false;
  displayBeverages: boolean = false;
  whatCanIdo: string;
  chosenBeverage: string;
  ownChoice: string;
  @Output() order: string; //One <chosen beverage>, coming right up!
  displayTheUsual: boolean;
  displayTheUsualButton: boolean;
  theUsual: string;
  displayEdit: boolean = false;
  displayEditInputButton:boolean = false;
  editNameInputValue: string; 
  welcomeReturningVisitor: string = "Welcome back!";
  orderUsual: string;
 
  // Input FirstName
  keyFirstName(event){
    this.inputFirstName = event.target.value;
    this.dataService.updatedFirstName(this.inputFirstName);
  }
 
  // Input LastName
  keyLastName(event){
    this.inputLastName = event.target.value;
    this.dataService.updatedLastName(this.inputLastName);
  }

  // Button enterName 
  enterName(){
    this.userDidLogIn.emit();
    this.displayWhatCanIdo = true;
    this.displayBeverages = true;
    this.whatCanIdo = "Alright " + this.inputFirstName + ", what can I do you for?";    
  }

  // Tar emot BeveragesData från beverages component
  reciveBeverages(event){
    this.beverageData = event;
  }

  // Button choseBeverage - användarens dryck
  chosenBeveragesButton(name: string){
    this.chosenBeverage = name; 
    this.displayWhatCanIdo = false;
    this.displayBeverages = false;
    this.displayTheUsual = false
    this.displayEdit = false;
    this.displayEditInputButton = false;
    this.displayTheUsualButton = false;
    this.order = "One " + this.chosenBeverage + ", coming right up!"
    // Skickar till servicefilen 
    this.dataService.updatedLastBeverage(this.chosenBeverage);
    this.clearOrder.emit(this.order)
  }
  @Output() clearOrder = new EventEmitter<string>();

  
 
  
  

//!
  // OwnChice Input
  ownChoiceInput(event){
    this.ownChoice = event.target.value;
  }

  //OwnChoice Button
  ownChoiceButton(){
    this.dataService.handleOwnChoice(this.ownChoice);
    this.beverageData = this.dataService.getBeverageData(); 
  }
//!

  // EditName button
  editName(){
    this.displayEditInputButton = true;
  }

  // EditNameInput
  editNameInput(event){
    this.editNameInputValue = event.target.value;
  }

  // EditNameButton
  editNameButton(){
    this.displayEditInputButton = false;
    this.displayTheUsual = true;
    this.displayBeverages = true;
    this.dataService.updatedFirstName(this.editNameInputValue);
    this.inputFirstName = this.dataService.getFirstName();
    this.welcomeReturningVisitor = "Hello again, " + this.inputFirstName + "! The usual?"
  }

  // Tar emot användarens theUsual från the-usual comp
  reciveTheUsual(event){
    this.theUsual = event;
    this.orderUsual = "The usual - " + "One " + this.theUsual + ", coming right up!" 
    this.displayBeverages = false;
    this.displayEdit = false;
    this.displayEditInputButton = false;
    this.displayTheUsual = false;
    this.welcomeReturningVisitor = "";
      if(this.dataService.getChosenBeverage() == null ){
        this.orderUsual = "There's no 'the usual' for you!!"; 
        /* this.displayTheUsualButton = false; */
      }
      else{ 
        this.displayTheUsualButton = true;
      }
  }

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.welcomeStranger = "Howdy, stranger. Haven't seen your face around here before. What's your name?"; 
    this.inputFirstName = this.dataService.getFirstName();
    this.welcomeReturningVisitor = "Hello again, " + this.inputFirstName + "! The usual?"

    if(this.dataService.getFirstName() == null){
      this.displayEdit=false;
      this.inputFirstName = "Stranger";
    }
    else{
      this.editName();
      this.displayTheUsual = true; 
      this.displayBeverages = true;
      this.displayWelcome = false;
      this.displayEdit=true;
      this.displayEditInputButton = false;
      this.displayTheUsualButton = true;
    }  
  }
}
