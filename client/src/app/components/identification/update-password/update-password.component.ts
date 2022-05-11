import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationService } from '../../../services/identification.service';
import { ToastService } from '../../../services/toast.service';



@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})


export class UpdatePasswordComponent implements OnInit {


       updateUserForm: FormGroup;
       userId: string;

  constructor(private identification: IdentificationService, private toast: ToastService) { }


 ngOnInit() {

      this.identification.getAuthStatus()

      this.updateUserForm = new FormGroup({
      		    pass:  new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
		    newpass:  new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
		    confirmnewpass: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)])
      });

  }


      onUpdate(){
        this.userId = sessionStorage.getItem('user_id');
	let pass = this.updateUserForm.get('pass').value;
	let newpass = this.updateUserForm.get('newpass').value;
	let confirmnewpass = this.updateUserForm.get('confirmnewpass').value;
	if(newpass === confirmnewpass){this.identification.updateIdentificationService(this.userId, newpass)
	}
	 else{this.toast.errorPasswordToast()}
      	}

 
}
