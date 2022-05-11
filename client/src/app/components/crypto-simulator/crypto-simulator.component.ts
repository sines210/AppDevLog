import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalListComponent } from '../modal-list/modal-list.component';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-crypto-simulator',
  templateUrl: './crypto-simulator.component.html',
  styleUrls: ['./crypto-simulator.component.scss'],
})

export class CryptoSimulatorComponent {

  buttonText: string = '.';
  symbolCurrency: string = '$';
  option1: any;
  option2: any;
  @Input() inputCurrency: string = '0';
  @Input() currency: string = 'USD';
  modal: HTMLElement;
  contentElement: HTMLElement;
  hideAndShow : boolean;


  constructor(private identification: IdentificationService) { }


  ngOnInit(){
	     this.buttonText = '.';
    	     this.identification.getAuthStatus();
	     this.modal = document.querySelector<HTMLElement>('app-modal-list');
	     this.hideAndShow = true;
	     this.presentModal();
  }

  dataFromChild($event){
	this.inputCurrency = $event
  }

  selectOption(){
  
	this.option1 = document.querySelector('.opt1');
	this.option1.classList.toggle('hideAndShow');


	this.option2 = document.querySelector('.opt2');
	this.option2.addEventListener('click', (event)=>{
		this.hideAndShow = false;
		this.presentModal();
			})
  }

  presentModal(){
	if(this.hideAndShow === true){
		this.modal.style.display = "none"
			    }
	else{
		this.modal.style.display = "block"
			}
  }

  hideModal(){
	this.hideAndShow = true;
	this.presentModal()
  }

}  





