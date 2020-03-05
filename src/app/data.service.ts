import { Injectable, Input } from '@angular/core';
import { Beverage } from './beverage';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  newBeverage; // ownChoice object class.property
  
  beverageData: Beverage[] = [
    {name: 'Fanta'}, {name: 'Coca Cola'}, {name: 'Sprite'}, {name: 'Water'}, {name: 'Coffee'}, {name: 'Tea'}];

    // Skickar data till dialogue component
    getBeverageData(): Beverage[]{
       // Kollar om data finns i localStorage
      let data = localStorage.getItem('beverages');
      console.log("getbeverageData service", data);
      
      // Om nej, spara standarddata i localStorage
      if (data == null){
        localStorage.setItem('beverages', JSON.stringify(this.beverageData))
        console.log('getBeverageData localstorage', this.beverageData);
      }
      // Returnera beverageData
      return JSON.parse(localStorage.getItem('beverages'));  
    }


   // Tar emot värde från component Dialogue
    updatedFirstName(firstName){
      localStorage.setItem('firstName', firstName);
    }
    
    updatedLastName(lastName){
      localStorage.setItem('lastName', lastName); 
    }

    updatedLastBeverage(drink){
      localStorage.setItem('chosenBeverage', drink);
    }

  // Hämtar firstname och getCHosenBev
    getFirstName(){
      return localStorage.getItem('firstName');
    }
    getChosenBeverage(){
      return localStorage.getItem('chosenBeverage');
    }

//! 
    // User ownChoice från dialogue.component
    handleOwnChoice(drink){
      this.newBeverage = {name: drink}
      this.beverageData.push(this.newBeverage);
      console.log("handleOwnChoice service filen, push ownchoice to beverageData", this.beverageData);
      localStorage.setItem('beverages', JSON.stringify(this.beverageData));
      console.log("handleOwnChoice service filen, new beverageData", this.beverageData);  
    }
//!
  // Remove LocalStorage
    deleteLocalStorage(){
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('chosenBeverage');
      localStorage.removeItem('beverages');
    }

  constructor() { }
}
