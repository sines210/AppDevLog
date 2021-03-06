import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from '../../services/http-request.service'; 
import { DataV2, Coins } from '../../models/datav2';
import { FunctionsService } from '../../services/functions.service';
import { IdentificationService } from '../../services/identification.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

public folder: string;  
data: DataV2[];
coins: Coins[];
roundedPrice: any;
decimal: string;




constructor(private activatedRoute: ActivatedRoute, private http:HttpClient, private httpRequestService:HttpRequestService, private functions:FunctionsService, private identification:IdentificationService) { }

  async ngOnInit() {

    

    this.identification.getAuthStatus();

    this.httpRequestService.getAllCoins()
    .subscribe((res)=>{
	this.data = res['data'].coins
	})	

  }


  roundedDecimal(decimal:string){ return this.functions.roundDecimal(decimal) }
  statusGetter(change:string){ return this.functions.getStatus(change) }
  colorGetter(status:string){ return this.functions.getColor(status) }
	

}

	
