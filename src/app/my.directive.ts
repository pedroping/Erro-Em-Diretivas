import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[myDirective]',
    exportAs: 'myDirective'
})

export class MyDirective{
    error: string = ''
    constructor(private control: NgControl) { }
    
    @HostListener('input', ['$event']) 
    onInputChange() {
      console.log(this.control.control.value)
        this.control.control.setValue(this.control.value.replace(/[^0-9]/g, ''));
        this.error = ''
        if(this.control.control.errors && this.control.control.errors.maxlength){
            this.error = 'Teste'
        }
    }
}