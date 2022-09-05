import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  getFormControlError(controlName: string, error : ValidationErrors){
    if(error['required'])
      return controlName + " should be required.";
    else if(error['minlength'])
      return controlName + " must have at least "+ error['minlength']['requiredLength']+' caracters';
    else if(error['max'])
      return controlName + " should be less then "+ error['max']['max'];
    return "";
  }
}
