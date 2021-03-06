import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IdentificationService } from '../../services/identification.service';
import { ToastService } from '../../services/toast.service';



@Component({
  selector: 'app-pin-required',
  templateUrl: './pin-required.component.html',
  styleUrls: ['./pin-required.component.scss'],
})


export class PinRequiredComponent  {

  pin: string ='';
  userId: string;
  color: string = '#3880ff';
  compteur: number;
  backspaceCompteur: number;
  buttonText: string = 'OK';
  lastIndex: number;
  lastChar: string;
  okEvent: string;
  

  constructor(private identification: IdentificationService, private toast: ToastService, private router: Router) { }


  ngOnInit() {
  	     this.buttonText = 'OK'  //PB avec les liens ds les tabs qui ne recharge pas la page et donc la valeur du bouton a regler
  	     this.identification.getAuthStatus();
	     
	     this.userId = sessionStorage.getItem('user_id');

	    }


  dataFromChild($event){
		this.pin = $event;
	        this.lastIndex = this.pin.length - 1;
		this.lastChar = `${this.pin.charAt(this.lastIndex)}`;
			 }

  colorFromChild($event){
	this.color = $event;
			 }

  compteurFromChild($event){
        this.compteur = $event;
			}

  backspaceFromChild($event){
	this.backspaceCompteur = $event;
			 }
  okPinFromChild($event){
	if(!this.pin)
		{this.color = '#eb445a'}
  
	else{  this.identification.verifyPin(this.userId, this.pin)
		.subscribe(
			(res)=>{this.toast.successJournalToast();
				this.color = '#2dd36f';
				this.pin = '';
			this.router.navigate(['folders', 'recovery']);
					},
			(err)=>{this.toast.errorIdToast();
				this.color = '#eb445a';
				this.pin = '';
					}
			)
		}
	}



//au lieu d'avoir des alertes on pourrait avoir un gros icone cadenas central fermé ouvert

}
