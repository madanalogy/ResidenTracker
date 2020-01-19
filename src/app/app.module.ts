import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ResidentsComponent } from './residents/residents.component';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidentsComponent,
    ResidentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
