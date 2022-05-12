import { Injectable, Input } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';

import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

       authStatus: boolean = false;
       userId: string;


  constructor(private http: HttpClient, private router: Router, private toast: ToastService) { }
  

  postIdentificationService(email:string,  pass:string){

  	this.http.post('https://projet-dev-log.herokuapp.com/signup', {email, pass}, {headers: {'content-type':'application/json'}})
	
	.subscribe(
		(res)=>{this.toast.successSignupToast();
			this.router.navigate(['/identification']);},
	       	(err)=>{this.toast.errorToast();}

					)
	}

  getIdentificationService(email:string, pass:string){		

  	this.http.get(`https://projet-dev-log.herokuapp.com/login/${email}/${pass}`)

	.subscribe(
		(res)=>{this.userId = res['token'];
			sessionStorage.setItem('user_id', this.userId);
			this.toast.successLoginToast();
			this.router.navigate(['folders', 'folder']);
			},
		(err)=>{this.toast.errorIdToast()}
		)
	}


  verifyPin(userId:string, pin: string){
	return this.http.get(`https://projet-dev-log.herokuapp.com/pin-verify/${userId}/${pin}`)
}

  updateIdentificationService(userId:string, pass:string){

         this.http.put(`https://projet-dev-log.herokuapp.com/updatepassword/${userId}/${pass}`, {userId, pass})

	 .subscribe(
		(res)=>{this.toast.successUpdateToast();
			this.router.navigate(['folders', 'folder']);
			},
		(err)=>{this.toast.errorToast()}
		)
  	}

  deleteIdentificationService(userId:string){
	this.http.delete(`https://projet-dev-log.herokuapp.com/delete/${userId}`)
	.subscribe(
		(res)=>{this.toast.successDeleteToast();
			this.router.navigate(['identification'])
			},
		(err)=>{this.toast.errorToast()}
	)
	//ici la prochaine etape sera de mettre en place la recovery phrase pour n'effacer que le compte mais pas les portefeuilles de facon a ce qu'ils soient recuperables avec la recovery. aussi il faudrait faire une page jolie du remove account avec explication que le compte va etre supprimé mais les portefeuilles seront recuperables et bouton
  }


  getAuthStatus(){
  
	return sessionStorage.getItem('user_id') ? true : this.router.navigate(['/identification']);
	
	}


		  
}

	


