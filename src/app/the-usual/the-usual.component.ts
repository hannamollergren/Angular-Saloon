import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  // Tar emot valda dryck från service
  theUsual: string = this.dataService.getChosenBeverage();
  displayTheUsual: boolean = true;

  // theUsualThanks button
  theUsualThanks(){
    this.theUsual = this.dataService.getChosenBeverage();
    this.displayTheUsual = false;
    console.log("the usual comp, hämtad thechosenbev från serice", this.theUsual);
    this.theUsualEvent.emit(this.theUsual)
  }

  @Output()theUsualEvent = new EventEmitter<string>();

  constructor(public dataService: DataService) {console.log("constructor the-usual", this.theUsual) 
  ;}

    

  ngOnInit(): void {
    

  
  }

}
