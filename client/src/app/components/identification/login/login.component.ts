import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationService } from '../../../services/identification.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


loginForm: FormGroup;
userId: string;

  constructor(private http: IdentificationService) { }


 ngOnInit() {

 
      this.loginForm = new FormGroup({
      		    email: new FormControl(null, Validators.email),
		   // phone: new FormControl(null, [Validators.minLength(8), Validators.maxLength(10)]),
		    pass:  new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)])
      });


  }


      onLogin(){
	let email = this.loginForm.get('email').value;
	let pass = this.loginForm.get('pass').value;

	this.http.getIdentificationService(email, pass)

//	this.http.userId$.subscribe((res)=>{this.userId = res})
	
	}

}

/*si on veut etre plus precis et precise la nature de l'erreur mp ou email ne traiter en 500 erreur que le catch sur la requete email en backend et traiter l'erreur du mp en front en renvoyant le mp en 201 avec un message different du message de succes*/