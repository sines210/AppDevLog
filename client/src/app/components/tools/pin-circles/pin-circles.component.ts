import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin-circles',
  templateUrl: './pin-circles.component.html',
  styleUrls: ['./pin-circles.component.scss'],
})
export class PinCirclesComponent implements OnInit {

       @Input() colorFromParent: string;
       @Input() compteurFromParent: number;
       @Input() backspaceFromParent: number;



  constructor() { }

  ngOnInit() {}
	     


  ngOnChanges(){  }
  

}
