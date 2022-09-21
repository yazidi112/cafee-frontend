import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective implements OnInit{

  @Input() appHide: number|undefined = 1000;
  
  constructor(private render: Renderer2,private el: ElementRef) { 
    this.el.nativeElement.remove();
  }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.el.nativeElement.style.display = 'none';
    // }, this.appHide);
  }

}
