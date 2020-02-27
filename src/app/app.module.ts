import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectBeverageComponent } from './select-beverage/select-beverage.component';
import { TheUsualComponent } from './the-usual/the-usual.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogueComponent,
    SelectBeverageComponent,
    TheUsualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
