import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  chosenBeverage: string;
  thsUsual: string; // skicka till dialogue med värde?? 

 
  
  constructor() { }

  // Tar emot valda dryck från localStorage
  ngOnInit(): void {
    this.chosenBeverage = localStorage.getItem('chosenBeverage');
    console.log("the usual choseBeverage", this.chosenBeverage);
  }

}
