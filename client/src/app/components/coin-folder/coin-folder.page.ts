import { DataV2, Stats, Coins } from '../../models/datav2';
import { Coin } from '../../models/coin';
import { FolderPage } from '../folder/folder.page';
import { CoinHistory, History  } from '../../models/coinHistory';
import { HttpRequestService } from '../../services/http-request.service';
import { DataSharingService } from '../../services/data-sharing.service';
import { FunctionsService } from '../../services/functions.service';
import { ChartsService } from '../../services/charts.service';
import { IdentificationService } from '../../services/identification.service';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-coin-folder',
  templateUrl: './coin-folder.page.html',
  styleUrls: ['./coin-folder.page.scss'],

})
export class CoinFolderPage implements OnInit {

       id: string;
       userId: string;
       currency: Coin;
       coinHistory: CoinHistory[];
       decimal: string;
       fullNumber: string;
       change24: string;
       change7: string;
       change30: string;
       changeStatus: string;
       color24: string;
       color7: string;
       color30: string;
       percentChange: string;


       currencyPrice: number[] = []
       currencyTimeStamp: string[] = [];
       priceToNumber: number;
       timeStamp: number;
       timeStampToDate: Date;
       dayString: string;
       monthString: string;
       fullDateFr: string;
       sectionTag: any;




        /******chart********/
        lineChartType: ChartType = 'line';  /*defaultDataPoint: ScatterDataPoint | n\
umber | null;*/

        lineChartData: ChartConfiguration['data'] = {
               datasets: [{
               label:'',
               data: [],
               backgroundColor: '',
               borderColor: '',
               borderWidth:1,
               pointStyle: 'line',
               fill: 'origin'
               }],
               labels: [],
               }
        lineChartOptions: ChartConfiguration['options'] = {
               animations: {
                 tension: {
                 duration: 1000,
                 easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: false
                  }
                        },
               responsive: true,
               plugins:{
                 title:{
                        display: true,
                        text: ['title', 'hacky subtitle']}
	/*	subtitle:{
			display: true,
			text: 'coucou'}*/
               }

        }

 constructor(private http:HttpClient, private httpRequestService: HttpRequestService, private activatedRoute:ActivatedRoute, private shareData: DataSharingService, private functions: FunctionsService, private charts: ChartsService, private identification: IdentificationService) { }



  async ngOnInit() { 

        this.id = this.activatedRoute.snapshot.paramMap.get('id');
	

	this.identification.getAuthStatus();
    
        this.httpRequestService.getCoin(this.id)
        .subscribe((res)=>{
                this.currency = res['data'].coin;

			this.decimal = 	this.functions.roundDecimal(this.currency['price'])
	

		 this.functions.htmlToString(this.currency.description);


                this.lineChartOptions = {
                                   plugins:{
                                        title:{
                                                display: true,
                                                text: [`$ ${this.decimal}`, `${this.functions.getStatus(this.currency['change'])}%`],
						color: `${this.functions.getColor(this.functions.getStatus(this.currency['change']))}`}}  }

                })




/**************************passing data **************************/
/*this.percentChange = */
this.shareData.sharedChange.subscribe(percentChange=>this.percentChange = 'cv')
/**************************/ /**************************/



/**************************get change **************************/
	this.httpRequestService.getChange24h(this.id)
	.subscribe((res)=>{
		this.currency = res['data'].coin;
		this.change24 = this.functions.getStatus(this.currency['change']);
		this.color24 = this.functions.getColor(this.functions.getStatus(this.currency['change']))
	})
	this.httpRequestService.getChange7d(this.id)
	.subscribe((res)=>{
		this.currency = res['data'].coin;
		this.change7 = this.functions.getStatus(this.currency['change']);
		this.color7 = this.functions.getColor(this.functions.getStatus(this.currency['change']))
	})
	this.httpRequestService.getChange30d(this.id)
	.subscribe((res)=>{
		this.currency = res['data'].coin;
		this.change30 = this.functions.getStatus(this.currency['change']);
		this.color30 = this.functions.getColor(this.functions.getStatus(this.currency['change']))
 	})


/**************************/ /**************************/


	this.httpRequestService.getCoinHistory1W(this.id)
	.subscribe((res)=>{
		this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         
}



/************************* Functions *************************/

	        roundedDecimal(decimal:string){ return this.functions.roundDecimal(decimal) };
		
		splittedNumber(fullNumber:string){ return this.functions.splitNumber(fullNumber) };
		

/************************************************************/

//tester le service de charts sur le chart switch et pas sur le onInit

/*charts switch*/

   setChart24H(){

         this.httpRequestService.getCoinHistory24H(this.id)
        .subscribe((res)=>{
                this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         }



setChart1W(){

         this.httpRequestService.getCoinHistory1W(this.id)
        .subscribe((res)=>{
                this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         }


setChart30D(){

         this.httpRequestService.getCoinHistory30D(this.id)
        .subscribe((res)=>{
                this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         }


setChart1Y(){

         this.httpRequestService.getCoinHistory1Y(this.id)
        .subscribe((res)=>{
                this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         }




}

/*setChart5Y(){

         this.httpRequestService.getCoinHistory5Y(this.id)
        .subscribe((res)=>{
                this.coinHistory = res['data'].history

                this.currencyPrice.push()

                this.coinHistory.forEach(el=>{

                this.priceToNumber = parseInt(el['price']);
                this.currencyPrice.push(this.priceToNumber);

                this.timeStamp = el['timestamp']*1000;
                this.timeStampToDate = new Date(this.timeStamp);
                this.fullDateFr = this.functions.setDate(this.timeStampToDate)
                this.currencyTimeStamp.push(this.fullDateFr)
                this.currencyTimeStamp.sort()


                        this.lineChartData =  {
                                         datasets: [{

                                                data: this.currencyPrice,
                                                label: 'Exchanges',
                                                       backgroundColor: 'rgba(148,159,177,0.2)',
                                                         borderColor: 'rgba(148,159,177,1)',
                                                         pointBackgroundColor: 'rgba(148,159,177,1)',
                                                                pointBorderColor: '#fff',
                                                                pointHoverBackgroundColor: '#fff',
                                                                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                                                                pointStyle: 'line',
                                                                fill: 'origin'
                                                                }],
                                                                labels: this.currencyTimeStamp
                                                                }
                                                })
                })
         }
*/
