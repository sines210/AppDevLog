import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IdentificationService } from '../../services/identification.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

       id: string;

  constructor(private activatedRoute: ActivatedRoute, private identification: IdentificationService) { }

  	ngOnInit() {

  		   this.id = this.activatedRoute.snapshot.paramMap.get('id');
		   this.identification.getAuthStatus();
  		   }

}
