import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Beverage } from '../beverage';


@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  beverageData: Beverage[];

  // Beorenden från service filen
  constructor(public beverageService: DataService){}


  // Hämtar data från service filen
  ngOnInit(): void {
    this.beverageData = this.beverageService.getBeverageData();
    this.beveragesEvent.emit(this.beverageData);
  }
  @Output()beveragesEvent = new EventEmitter<any>();

}



