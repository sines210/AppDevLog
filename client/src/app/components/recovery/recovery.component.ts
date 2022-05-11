import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../services/identification.service';




@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})


export class RecoveryComponent implements OnInit {

  constructor(private identification: IdentificationService) { }

  ngOnInit() {

  	     this.identification.getAuthStatus();

  }

}
