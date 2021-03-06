import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../../services/identification.service';


@Component({
  selector: 'app-remove-account',
  templateUrl: './remove-account.component.html',
  styleUrls: ['./remove-account.component.scss'],
})
export class RemoveAccountComponent implements OnInit {

userId: string;

  constructor(private identification: IdentificationService) { }

  ngOnInit() {}

  onDelete(){

	this.identification.getAuthStatus();
	this.userId = sessionStorage.getItem('user_id');
	this.identification.deleteIdentificationService(this.userId)
  }

}
