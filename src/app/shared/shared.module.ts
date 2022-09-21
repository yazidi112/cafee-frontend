import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
import { HideDirective } from './directives/hide.directive';



@NgModule({
  declarations: [
    FlashMessageComponent,
    HideDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FlashMessageComponent
  ]
})
export class SharedModule { }
