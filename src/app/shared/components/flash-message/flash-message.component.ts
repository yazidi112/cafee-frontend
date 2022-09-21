import { Component, OnInit } from '@angular/core';
import { Flash } from 'src/app/models/flash.model';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

  flash!: Flash|undefined;

  constructor(private flashService: FlashMessageService) { }

  ngOnInit(): void {
    this.flashService.data$.subscribe({
      next: (data)=> {
        this.flash = data;
      }
    })
  }

}
