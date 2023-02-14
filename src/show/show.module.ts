import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import { arr } from 'src/app/user';
import { SHOWComponent } from './show.component';

@NgModule(
{
   declarations :[
    SHOWComponent
   ],

   imports :
   [
    BrowserModule,
    FormsModule
   ],
   exports :[ SHOWComponent ]
})

export class ShowModule{ 
}