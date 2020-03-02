import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  forgottenUser: boolean = false;

  forget(){
    
    this.forgottenUser = true;
    console.log("forget comp forget click", this.forgottenUser );
    this.beverageService.deleteLocalStorage();
    this.forgetMe.emit(this.forgottenUser);
    
  }
  @Output()forgetMe = new EventEmitter<boolean>();

  constructor(public beverageService: DataService) { }

  ngOnInit(): void {
    
  }

}
