import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'my-input',
  template:`<input [ngModel]="value" (ngModelChange)="value=$event;onChange(value)">`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()  => MyInputComponent ),
      multi: true
    }
  ]
})

export class MyInputComponent implements ControlValueAccessor {

  onChange: () => void;
  onTouched: () => void;

  value: string;

  writeValue(value: string): void {
    this.value = value ? value : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}