import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {

 @Input() colorCircle: string;
 @Input() compteur: number;
 @Input() backspaceCompteur: number;
 colorInit: string;
 index: number;

  
 constructor() { }

  ngOnInit(){ }
    	     

   ngOnChanges(){
   
 	var circles = document.querySelectorAll<HTMLElement>('.circle');


        this.index = this.compteur


      	    if(this.compteur === 0 ){
  		       circles.forEach((circle)=>{
				circle.style.backgroundColor = '#3880ff'
		       })
  		     }
  

		if(this.colorCircle === '#eb445a'){
			circles.forEach((circle)=>{
				circle.style.backgroundColor = this.colorCircle
				setTimeout(()=>{circle.style.backgroundColor = '#3880ff'}, 500);
			})
		    }

		 if(this.colorCircle === '#2dd36f'){
			circles.forEach((circle)=>{
				circle.style.backgroundColor = this.colorCircle
			})
		    }
	   

     		  if(this.backspaceCompteur > 0 && this.colorCircle === '#ffc409'){
		  	this.index = this.compteur
  			circles[this.index].style.backgroundColor = '#3880ff';
  			}

		     

	    for(var i=0; i<=circles.length; i++){
	        	 
		        if(this.compteur === 8){
			       circles[7].style.backgroundColor = this.colorCircle;
				 }
				 
			else if(this.compteur === 7){
			       circles[6].style.backgroundColor = this.colorCircle;
				 }
		        else if(this.compteur === 6){
			       circles[5].style.backgroundColor = this.colorCircle;
				 }
			else if(this.compteur === 5){
			       circles[4].style.backgroundColor = this.colorCircle;
				 }
			else if(this.compteur === 4){
			       circles[3].style.backgroundColor = this.colorCircle;
				 }
			else if(this.compteur === 3){
			       circles[2].style.backgroundColor = this.colorCircle;
				 }
			else if(this.compteur === 2){
			       circles[1].style.backgroundColor = this.colorCircle;
				 }
			else if(this.compteur === 1){
			       circles[0].style.backgroundColor = this.colorCircle;
				 }
		        
	}
}



 

}
