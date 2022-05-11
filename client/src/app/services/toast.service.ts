import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastController: ToastController) { }




  	  async successSignupToast() {
    	    const toast = await this.toastController.create({
      	    	  message: 'Account created, please login',
      	  	  duration: 1000,
      	  	  position: 'bottom',
      	  	  icon: 'information-circle',
      	  	  color: 'success'
   	   	 });
    	    toast.present();
  	   };


  	  async successLoginToast() {
    	    const toast = await this.toastController.create({
      	    	   message: 'Welcome',
      	  	   duration: 1000,
      	 	   position: 'bottom',
      	  	   icon: 'information-circle',
      	  	   color: 'success'
   	   	   });
    	     toast.present();
  	   };

  	  async successPinToast() {
    	    const toast = await this.toastController.create({
      	    	   message: 'Pin correct',
      	  	   duration: 800,
      	 	   position: 'bottom',
      	  	   icon: 'information-circle',
      	  	   color: 'success'
   	   	   });
    	     toast.present();
  	   };

  	  async successUpdateToast() {
    	    const toast = await this.toastController.create({
      	    	  message: 'Password successfully updated',
      	  	  duration: 1000,
      	  	  position: 'bottom',
      	  	  icon: 'information-circle',
      	  	  color: 'success'
   	   	 });
    	    toast.present();
  	   };

	  async successWalletToast() {
    	    const toast = await this.toastController.create({
      	      message: 'Wallet created',
      	      duration: 800,
      	      position: 'bottom',
      	      icon: 'information-circle',
      	      color: 'success'
   	      });
    	    toast.present();
  	   };

	  async successJournalToast() {
    	    const toast = await this.toastController.create({
      	  	message: 'Transaction successfully reported to the journal',
      	  	duration: 800,
      	  	position: 'bottom',
      	  	icon: 'information-circle',
      	  	color: 'success'
   	   	 });
    	     toast.present();
  	   };


  	  async successDeleteToast() {
    	    const toast = await this.toastController.create({
      	    	  message: 'Wallet successfully removed from this device',
      	  	  duration: 1000,
      	  	  position: 'bottom',
      	 	   icon: 'information-circle',
      	  	   color: 'success'
   	   	   });
    	     toast.present();
  	   };
	   
	  async errorPasswordToast() {
        	const toast = await this.toastController.create({
      		  	message: 'Passwords not matching',
      	  		duration: 1000,
      	  		position: 'bottom',
	      	  	icon: 'information-circle',
      	  	        color: 'danger'
   	   		});
    	   	toast.present();
  	  	 };

	  async errorIdToast() {
    	    const toast = await this.toastController.create({
      	  	       message: 'Identification failed',
      	  	       duration: 800,
      	  	       position: 'bottom',
      	  	       icon: 'information-circle',
      	  	       color: 'danger'
   	  	       });
    	     toast.present();
  	   };
	   
	  async errorToast() {
    	    const toast = await this.toastController.create({
      	  	message: 'Operation failed',
      	  	duration: 800,
      	  	position: 'bottom',
      	  	icon: 'information-circle',
      	  	color: 'danger'
   	   	});
    	     toast.present();
  	   };



}
