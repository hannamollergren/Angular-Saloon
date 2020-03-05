import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  // Tar emot valda dryck från service
  theUsual: string;
  displayTheUsual: boolean = true;

  // theUsualThanks button
  theUsualPlease(){
    this.theUsual = this.dataService.getChosenBeverage();
    this.displayTheUsual = false;
    this.theUsualEvent.emit(this.theUsual);
  }

  @Output()theUsualEvent = new EventEmitter<string>();

  constructor(public dataService: DataService) {}

    

  ngOnInit(): void {}

}
