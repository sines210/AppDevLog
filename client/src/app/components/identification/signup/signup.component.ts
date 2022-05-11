import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationService } from '../../../services/identification.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {


       userForm: FormGroup;


  constructor(private http: IdentificationService, private toastController: ToastController) { }


 ngOnInit() {
 	    
      this.userForm = new FormGroup({
      		    email: new FormControl(null, Validators.email),
		   // phone: new FormControl(null, [Validators.minLength(8), Validators.maxLength(10)]),
		    pass:  new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
		    confirmpass: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)])
		    //pour le pass faire une regexp dans Validators.pattern(regexp) ou bien trouver un moyen de n'accepter que le type number pour avoir un pin de 8 chiffres sur pave numerique
      });

      //this.userForm.setValue({email: '', pass: '', confirmpass: ''});
      
  }


      onLogin(){

	let email = this.userForm.get('email').value;
	//let phone = this.userForm.get('phone').value;
	let pass = this.userForm.get('pass').value;
	let confirmpass = this.userForm.get('confirmpass').value;
	if(pass === confirmpass){this.http.postIdentificationService(email, pass)
	}
	 else{this.errorPasswordToast()}
      	}


	async errorPasswordToast() {
    	  	const toast = await this.toastController.create({
      	  	message: 'Passwords not matching',
      	  	duration: 2000,
      	  	position: 'bottom',
      	  	icon: 'information-circle',
      	  	color: 'danger'
   	   	});
    	   	toast.present();
  	  	 };

 
}
