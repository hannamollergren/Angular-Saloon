import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  beverageData:string[];

  // Beorenden från service filen
  constructor(public beverageService: DataService) {console.log("constructor beverage");
}

//SKICKA DATA TILL DIALGOUE!!!!

  // Hämtar data från service filen
  ngOnInit(): void {
    this.beverageData = this.beverageService.getBeverageData();
    console.log('beveragedata select-beverages', this.beverageData);
    this.beveragesEvent.emit(this.beverageData);
  }
  @Output()beveragesEvent = new EventEmitter<any>();

}



