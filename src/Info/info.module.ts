import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { INFOComponent } from "./info.component";
import { FormsModule } from '@angular/forms';
import { arr, User } from "src/app/user";

@NgModule({
  declarations :[
    INFOComponent
  ],
  imports :
  [
    BrowserModule,
    FormsModule,
  ],
  exports :[INFOComponent]
})

export class INFOModule { }