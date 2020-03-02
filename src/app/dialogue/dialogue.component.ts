import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Beverage } from '../beverage';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  welcomeStranger: string = "Howdy, stranger. Haven't seen your face around here before. What's your name?";
  displayWelcome: boolean = true;
  inputFirstName: string = this.dataService.getFirstName();
  inputLastName: string;
  @Input() beverageData: Beverage[];
  displayWhatCanIdo: boolean = false;
  displayBeverages: boolean = false;
  whatCanIdo: string;
  chosenBeverage: string;
  order: string; //One <chosen beverage>, coming right up!
  displayTheUsual: boolean = false;
  theUsual: string;
  @Input() forgottenUser: boolean;
  displayEdit: boolean = false;
  displayEditInputButton:boolean = false;
  editNameInputValue: string; 
  welcomeReturningVisitor: string = "Hello again, " + this.inputFirstName + "! The usual? "
  orderUsual: string;

  
  // Input FirstName
  keyFirstName(event){
    console.log("input firstname", this.inputFirstName);
    this.inputFirstName = event.target.value;
    this.dataService.updatedFirstName(this.inputFirstName);
  }
 
  // Input LastName
  keyLastName(event){
    console.log("input lastname", this.inputLastName)
    this.inputLastName = event.target.value;
    this.dataService.updatedLastName(this.inputLastName);
  }

  // Button enterName 
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
  chosenBeveragesButton(name: string){
    this.chosenBeverage = name; 
    console.log('chosen bev', this.chosenBeverage);
    this.order = "One " + this.chosenBeverage + ", coming right up!"
    this.displayWhatCanIdo = false;
    this.displayBeverages = false;
    this.displayTheUsual = false
    // Skickar till servicefilen 
    this.dataService.updatedLastBeverage(this.chosenBeverage);
    this.displayEdit = false;
    this.displayEditInputButton = false;
   
  }


  ///////

  // EditName button
  editName(){
    this.welcomeStranger= "Edit your name below";
    this.displayEditInputButton = true;
  }

  // EditNameInput
  editNameInput(event){
    this.editNameInputValue = event.target.value;
    console.log('editNameINnput', this.editNameInputValue);
    /* this.dataService.updatedEditName(this.inputFirstName);  */
  }

  // EditNameButton
  editNameButton(){
    console.log("editnamebutton", this.editNameInputValue);
    this.displayEditInputButton = false;
    this.displayTheUsual = true;
    this.displayBeverages = true;
    this.dataService.updatedFirstName(this.editNameInputValue);
    console.log('editnamebutton dialouge comp', this.editNameInputValue)
    this.inputFirstName = this.dataService.getFirstName();
    console.log("updated inputvalue dialog", this.inputFirstName);
  }

  //////////

  reciveTheUsual(event){
    this.theUsual = event;
    console.log("dia comp recivetheUsual", this.theUsual);
    this.orderUsual = "The usual - " + this.theUsual + ", coming right up!" 
    this.displayBeverages = false;
    this.displayEdit = false;
    this.displayEditInputButton = false;
    this.welcomeReturningVisitor = "";
  }

  /* theUsual(){

  } */
  
  /* removeButton(){
    
    if(this.forgottenUser == true)
    {
      this.welcomeStranger = "hej";
      this.displayWelcome = true;
    }
  } */

  

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if(localStorage.getItem('firstName') == null){
      this.displayWelcome = true;
      this.displayEdit=false;
    }
    else{
      this.editName();
      this.displayTheUsual = true;
      this.displayBeverages = true;
      this.displayWelcome = false;
      this.displayEdit=true;
      this.displayEditInputButton = false
    }  
  }

}
