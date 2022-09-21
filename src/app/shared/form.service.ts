import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  getFormControlError(control: AbstractControl): string{
    if(control.hasError('required'))
      return "Ce champ est obligatoire";
    else if(control.hasError("minlength"))
      return "Vous devez saisir au moins "+control.errors!['minlength']['requiredLength']+" caractéres";
    else if (control.hasError("maxlength"))
      return "Vous avez saisi plus de "+control.errors!['maxlength']['requiredLength']+" caractéres";
    return "erreur inconnu!";
  }
}
