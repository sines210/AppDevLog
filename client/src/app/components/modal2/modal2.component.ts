import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';
import { FunctionsService } from '../../services/functions.service';
import { IdentificationService } from '../../services/identification.service';
import { DataV2 } from '../../models/datav2';
import { Arrays } from '../../models/arrays';


@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component implements OnInit {



  cryptos: DataV2[];
  priceCoin: any;
  toNumber: number;
  sumCryptos: number;
  @Input() inputCurrency: string;
  @Input() symbolCurrency: string;
  @Input() currency: string;
  @Input() selectSimulator: string;
  @Output() symbolToParent = new EventEmitter();
  change24: string;
  color24: string;
  flopsArray: any[] = [];
  topsArray: any[] = [];
  modelFlop: Arrays[] = [];
  modelTop: Arrays[] = [];


  constructor(private http: HttpRequestService, private functions: FunctionsService, private identification: IdentificationService) { }



  ngOnInit(){
	this.identification.getAuthStatus();
  }

  ngOnChanges(){

	this.http.getAllCoins()
	     .subscribe((res)=>{

		this.cryptos = res['data'].coins;


		this.cryptos.forEach((c)=>{
			
			if(c['change'][0]==='-'){
				this.flopsArray.push(`${c['change']} ;  ${c['name']} ; ${c['rank']} ; ${c['price']} ;  ${c['iconUrl']} ;  ${c['uuid']} ;  ${c['symbol']} `);
				this.flopsArray = this.flopsArray.sort().reverse();
					}
			else{
				this.topsArray.push(`${c['change']} ;  ${c['name']} ; ${c['rank']} ; ${c['price']} ;  ${c['iconUrl']} ;  ${c['uuid']} ;  ${c['symbol']} `);
				this.topsArray = this.topsArray.sort().reverse();
					}
				})
			this.flopsArray.forEach((el)=>{
				this.modelFlop.push(el.split(';'))
				})
			this.topsArray.forEach((el)=>{
				this.modelTop.push(el.split(';'))
				})		
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

  roundedDecimal(decimal:string){ return this.functions.roundDecimal(decimal) }	
  statusGetter(change:string){ return this.functions.getStatus(change) }
  colorGetter(status:string){ return this.functions.getColor(status) }

}
