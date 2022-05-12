import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';
import { FunctionsService } from '../../services/functions.service';
import { IdentificationService } from '../../services/identification.service';
import { DataV2 } from '../../models/datav2';


@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})

export class ModalListComponent{

  cryptos: DataV2[];
  priceCoin: any;
  toNumber: number;
  sumCryptos: number;
  @Input() inputCurrency: string;
  @Input() symbolCurrency: string;
  @Input() currency: string;
  @Output() symbolToParent = new EventEmitter();



  constructor(private http: HttpRequestService, private functions: FunctionsService, private identification: IdentificationService) { }

  ngOnInit(){
	this.identification.getAuthStatus();
  }

  ngOnChanges(){
    
	this.http.getAllCoins()
	     .subscribe((res)=>{
		this.cryptos = res['data'].coins;
				})
				
	this.symbolToParent.emit(this.symbolCurrency)
		}

totalCryptos(inputCurrency:string, currency:string, priceCoin: any){
        /*if(this.coinPrice>=0){
		this.priceCoin = this.coinPrice
		}*/
	this.toNumber = parseFloat(inputCurrency);
	if(currency==='USD'){
		this.sumCryptos = this.toNumber/priceCoin;
		this.symbolCurrency = '$';
		}
	if(currency==='EUR'){
		this.sumCryptos = (this.toNumber/priceCoin) / 1.10;
		this.symbolCurrency = '€';
		}
 	return this.sumCryptos
	}


}
