import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentificationService } from '../../services/identification.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';




@Component({
  selector: 'app-identification',
  templateUrl: './identification.page.html',
  styleUrls: ['./identification.page.scss'],
})
export class IdentificationPage implements OnInit {

       user: User[];
       formData: FormData;
       userForm: FormGroup;
       errorMessage: string;
       validateMessage: string;
       matchPassword: boolean;

  constructor(private http: IdentificationService, private router: Router) { }

  ngOnInit() {}

  isLogged(){
	return sessionStorage.getItem('status') ? true : false
	}
}
