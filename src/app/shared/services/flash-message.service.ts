import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flash } from 'src/app/models/flash.model';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  private dataStringSource = new Subject<Flash>();
  data$ = this.dataStringSource.asObservable();

  show(message: string, options= {type:'success',timeout:1000}){
    let flash = {message: message, options:options}
    this.dataStringSource.next(flash);
    console.log(message);
  }
}
