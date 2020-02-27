import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // List Beverages
  beverageData = ['Fanta', 'Coca Cola', 'Sprite', 'Water', 'Coffee', 'Tea'];
  
    getBeverageData(){
    return this.beverageData;
    }

  constructor() { }
}
