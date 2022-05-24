import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalListComponent } from '../modal-list/modal-list.component';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-crypto-simulator',
  templateUrl: './crypto-simulator.component.html',
  styleUrls: ['./crypto-simulator.component.scss'],
})

export class CryptoSimulatorComponent{

  buttonText: string = '.';
  @Input() inputCurrency: string = '0';
  @Input() currency: string = 'USD';
  @Input() symbolCurrency: string = '$';
  @Input() selectSimulator: string = '';
  modal: HTMLElement;
  submitButton: HTMLElement;
  dismissButton: HTMLElement;
  wrappedButton: HTMLElement;
  contentElement: HTMLElement;
  switchIndicator : boolean;
  enableButton: boolean = false;
  option0: HTMLElement;
  option1: HTMLElement;
  option2: HTMLElement;
  option3: HTMLElement;
  isSubmitButton: boolean = false;    

  constructor(private identification: IdentificationService) { }


  ngOnInit(){	
	     this.buttonText = '.';
    	     this.identification.getAuthStatus();
	     this.wrappedButton = document.querySelector<HTMLElement>('.wrapped-button');

	     this.switchIndicator = true;


	     	//set custom ionic css property   =>   this.dismissButton.style.setProperty('--background', '#eb445a');

		this.option0 = document.querySelector<HTMLElement>('.opt0');
		this.option1 = document.querySelector<HTMLElement>('.opt1');
		this.option2 = document.querySelector<HTMLElement>('.opt2');
		this.option3 = document.querySelector<HTMLElement>('.opt3');

		}


  dataFromChild($event){
	this.inputCurrency = $event
  }

 symbolFromChild($event){
	this.symbolCurrency = $event
  }




/////*Fonctions hide and show liste simulateur et switch submit dismiss button*////

  testFunction(){this.switchButton()}

  switchButton(){
  
	if(this.switchIndicator === true && this.isSubmitButton===false && this.submitButton==null){
	
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos submit" expand="full"  disabled="true">Launch simulator</ion-button>`);
			this.submitButton = document.querySelector<HTMLElement>('.submit');
			//this.wrappedButton.appendChild(this.submitButton);

			this.submitButton.addEventListener('click', (event)=>{
			//this.modal.style.visibility = "visible";
			this.switchIndicator = false;
			this.isSubmitButton = true;
			this.testFunction()
					     })
	}

	else if(this.switchIndicator === true && this.isSubmitButton === true){
	     		this.wrappedButton.removeChild(this.dismissButton);
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos submit" expand="full">Launch simulator</ion-button>`);
			this.submitButton = document.querySelector<HTMLElement>('.submit');

			//this.wrappedButton.replaceChild(this.submitButton, this.dismissButton);on n'utilise pas cette méthode car elle créee un genre de clone du node qui peut poser des pb à la longue

			this.submitButton.addEventListener('click', (event)=>{
			//this.modal.style.visibility = "visible";
			this.switchIndicator = false;
			this.testFunction()
					     })			
	}
	
	else if(this.switchIndicator === false){
	     		this.wrappedButton.removeChild(this.submitButton);
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos dismiss" expand="full"  color="danger">Dismiss</ion-button>`);
			
			this.dismissButton = document.querySelector<HTMLElement>('.dismiss');

			
			this.dismissButton.addEventListener('click', (event)=>{
			//this.modal.style.visibility = "hidden";
			this.switchIndicator = true;
			this.testFunction()
			})
			
	}
  }
////////////////////////////////////////////////////////////////////////////

  selectOption(){
	this.option1.addEventListener('click', ()=>{this.selectSimulator = "popularity"
					       	   // this.modal = document.querySelector<HTMLElement>('app-modal2');
						    	     this.testFunction()
						    })
	this.option2.addEventListener('click', ()=>{this.selectSimulator = "tops"
					       	    //this.modal = document.querySelector<HTMLElement>('app-modal1');
						    	     this.testFunction()
						    })
	this.option3.addEventListener('click', ()=>{this.selectSimulator = "flops"
					       	     //this.modal = document.querySelector<HTMLElement>('app-modal-list');
						     	     this.testFunction()
						     });
  }


}


// s'occuper de l'erreur au reclic sur une option (erreur pas blocante mais qui peut poser des pb à la longue)