import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyInputComponent } from './hello.component';
import {MyDirective} from './my.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, MyInputComponent,MyDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
