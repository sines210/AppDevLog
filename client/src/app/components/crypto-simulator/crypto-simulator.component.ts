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
  option1: any;
  option2: any;
  @Input() inputCurrency: string = '0';
  @Input() currency: string = 'USD';
  @Input() symbolCurrency: string = '$';
  modal: HTMLElement;
  submitButton: HTMLElement;
  dismissButton: HTMLElement;
  wrappedButton: HTMLElement;
  contentElement: HTMLElement;
  switchIndicator : boolean;
  enableButton: boolean = false;


  constructor(private identification: IdentificationService) { }

   

  ngOnInit(){	
	     this.buttonText = '.';
    	     this.identification.getAuthStatus();
	     this.modal = document.querySelector<HTMLElement>('app-modal-list');
	     this.wrappedButton = document.querySelector<HTMLElement>('.wrapped-button');
	     this.submitButton = document.querySelector<HTMLElement>('.submit');
	     this.switchIndicator = true;
	     this.testFunction()
	     
	     	//set custom ionic css property   =>   this.dismissButton.style.setProperty('--background', '#eb445a');

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
  
	if(this.switchIndicator === true && this.dismissButton==null){
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos submit" expand="full"  disabled="true">Launch simulator</ion-button>`);
			this.submitButton = document.querySelector<HTMLElement>('.submit');  	

			this.submitButton.addEventListener('click', (event)=>{
			this.modal.style.visibility = "visible";
			this.switchIndicator = false;
			this.testFunction()
					     })
	}

	else if(this.switchIndicator === true && this.dismissButton!==null){
	     		this.wrappedButton.removeChild(this.dismissButton);
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos submit" expand="full">Launch simulator</ion-button>`);
			this.submitButton = document.querySelector<HTMLElement>('.submit');
			this.submitButton.addEventListener('click', (event)=>{
			this.modal.style.visibility = "visible";
			this.switchIndicator = false;
			this.testFunction()
					     })			
	}
	
	else if(this.switchIndicator === false){
	     		this.wrappedButton.removeChild(this.submitButton);
			this.wrappedButton.insertAdjacentHTML('beforeend', `<ion-button class="button-buy-cryptos dismiss" expand="full"  color="danger">Dismiss</ion-button>`);
			this.dismissButton = document.querySelector<HTMLElement>('.dismiss');
			
			this.dismissButton.addEventListener('click', (event)=>{
			this.modal.style.visibility = "hidden";
			this.switchIndicator = true;
			this.testFunction()
			})
			
	}
  }
////////////////////////////////////////////////////////////////////////////

}







