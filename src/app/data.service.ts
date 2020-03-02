import { Injectable, Input } from '@angular/core';
import { Beverage } from './beverage';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  
  beverageData: Beverage[] = [
    {name: 'Fanta'}, {name: 'Coca Cola'}, {name: 'Sprite'}, {name: 'Water'}, {name: 'Coffee'}, {name: 'Tea'}];
  

    // Skickar data till dialogue component
    getBeverageData(): Beverage[]{
       // Kollar om data finns i localStorage
      
      // Om nej, spara standarddata i localStorage
      if (localStorage.getItem('beverages') == undefined){
        localStorage.setItem('beverages', JSON.stringify(this.beverageData))
        console.log('getBeverageData ls', this.beverageData);
        }

      // Returnera beverageData
      return JSON.parse(localStorage.getItem('beverages')) 
    }

   // Tar emot värde från component Dialogue
    updatedFirstName(firstName){
      localStorage.setItem('firstName', firstName);
    }
    
    updatedLastName(lastName){
      localStorage.setItem('lastName', lastName);
      console.log('updatedLastbev', lastName); 
    }

    updatedLastBeverage(drink){
      localStorage.setItem('chosenBeverage', drink);
      console.log('updatedLastbev', drink); 
    }


  // Hämtar firstname och getCHosenBev
    getFirstName(){
      return localStorage.getItem('firstName');
    }
    getChosenBeverage(){
      return localStorage.getItem('chosenBeverage');
    }

  // Remove LocalStorage
    deleteLocalStorage(){
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('chosenBeverage');
      localStorage.removeItem('beverages');
    }

  constructor() { }
}
