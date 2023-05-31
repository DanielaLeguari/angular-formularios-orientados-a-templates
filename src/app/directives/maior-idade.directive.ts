import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMaiorIdade]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective {

  constructor() { }

}
