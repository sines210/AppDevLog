import { Component, OnInit } from '@angular/core';
import { IdentificationService } from '../../../services/identification.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private identification: IdentificationService) { }

  ngOnInit() {
     sessionStorage.clear();
     this.identification.getAuthStatus();
  }

}
