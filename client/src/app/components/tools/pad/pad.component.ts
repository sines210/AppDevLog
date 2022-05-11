import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss'],
})


export class PadComponent implements OnInit {

       @Input() inputFromParent: string = '0';
       @Input() colorOnClick: string;
       @Input() padNumberClick: number;
       @Input() backspaceClick: number;
       @Input() getButtonText: string;
       @Input() initPin: string;
       switchingButtonText: HTMLElement;
       lastIndex: number;
       firstIndex: string;
       @Output() inputToParent = new EventEmitter();
       @Output() colorToParent = new EventEmitter();
       @Output() compteurClick = new EventEmitter();
       @Output() compteurBackspaceClick = new EventEmitter(); 
       @Output() clickOk = new EventEmitter();


  constructor() { }


  ngOnInit() {
  	     
  	     this.padNumberClick = 0;
	     this.backspaceClick = 0;
	     this.switchingButtonText = document.querySelector('.switch-button');
      	    this.switchingButtonText.innerText = this.getButtonText;
  }


  dataToParent(){
	this.inputToParent.emit(this.inputFromParent)
	}
  
  changeColor(){
	       	 this.colorOnClick = '#ffc409';
 		  this.colorToParent.emit(this.colorOnClick);
		  };
		  
  addCompteur(){
		  this.padNumberClick++;
		  if(this.padNumberClick>8){
			this.padNumberClick = 0;
			}	
		  this.compteurClick.emit(this.padNumberClick);
		  };
		  
  subtractCompteur(){
		this.padNumberClick--;
         	  if(this.padNumberClick<0){
			this.padNumberClick = 0
			}
		this.compteurClick.emit(this.padNumberClick);
		};
		  
  backspaceBehavior(){
	        this.subtractCompteur();
		this.backspaceClick++
		this.compteurBackspaceClick.emit(this.backspaceClick);
		};
  okFunction(){
		this.clickOk.emit("ok");
		};


/****PAD****/
      set1(){
   this.sliceZero();   
   this.inputFromParent = this.inputFromParent.concat('1');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set2(){
   this.sliceZero();
   this.inputFromParent = this.inputFromParent.concat('2');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set3(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('3');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set4(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('4');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set5(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('5');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set6(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('6');
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set7(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('7');      
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set8(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('8');      
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
      set9(){
   this.sliceZero();      
   this.inputFromParent = this.inputFromParent.concat('9');      
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
     set0(){
   this.sliceZero();     
   this.inputFromParent = this.inputFromParent.concat('0');      
   this.dataToParent();
   this.changeColor();
   this.addCompteur();
   }
     setPoint(){
   if(this.switchingButtonText.innerText === 'OK'){this.okFunction();};
   this.sliceZero();
   this.inputFromParent = this.inputFromParent.concat('.');
   this.dataToParent();
   setTimeout(()=>{this.padNumberClick = 0;}, 1000);
   this.compteurClick.emit(this.padNumberClick);
   }
     setBackspace(){
   this.sliceZero();		     
   this.lastIndex = this.inputFromParent.length - 1;
   this.inputFromParent = this.inputFromParent.slice(0, this.lastIndex);
   this.dataToParent();
   this.changeColor();
   this.backspaceBehavior();
   }


  sliceZero(){
	this.firstIndex = this.inputFromParent.charAt(0)
        if(this.firstIndex==='0'){
	this.inputFromParent = this.inputFromParent.slice(1)}
	}




}
