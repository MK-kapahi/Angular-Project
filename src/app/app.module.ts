import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { INFOModule } from 'src/Info/info.module';
import { ShowModule } from 'src/show/show.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowModule,
    INFOModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
