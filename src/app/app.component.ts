import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = new FormControl('', Validators.maxLength(10))
  qqq
  form=new FormGroup({
    control:new FormControl('', Validators.maxLength(10))
  })
}
