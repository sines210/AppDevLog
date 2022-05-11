import { Injectable } from '@angular/core';
import { CoinHistory } from '../models/coinHistory';
import { Coin } from '../models/coin';
import { FunctionsService } from './functions.service';





@Injectable({
  providedIn: 'root'
})
export class ChartsService {


       currency: Coin;
       coinHistory: CoinHistory[];
       decimal: string;
       fullNumber: string;
       fullDateFr: string;
       currencyPrice: number[] = []
       currencyTimeStamp: string[] = [];
       priceToNumber: number;
       timeStamp: number;
       timeStampToDate: Date;




  constructor(private functions: FunctionsService) { }

  	setChart(coinHistory:CoinHistory[]){
                this.coinHistory = coinHistory

		
                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = el['price']
		this.currencyPrice.push(this.priceToNumber);


		this.timeStamp = el['timestamp']*1000;
		this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


             

                                                }       )

                }

}


