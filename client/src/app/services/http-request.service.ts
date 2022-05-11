import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { CoinHistory, History } from '../models/coinHistory';
import { DataV2 } from '../models/datav2';
import { Coin } from '../models/coin';
import { EnvService } from '../services/env.service';


@Injectable({
  providedIn: 'any'
})
export class HttpRequestService {

  constructor(private http:HttpClient, private env:EnvService) { }

  apikey: string;


	getAllCoins():Observable<DataV2[]>{
	 	this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<DataV2[]>("https://coinranking1.p.rapidapi.com/coins?timePeriod=24h",
		{      
		  "headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}
			})
		}


	getCoin(id:string):Observable<Coin[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<Coin[]>(`https://coinranking1.p.rapidapi.com/coin/${id}`,
		{
		 "headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}
			})	

		}


/************************** change value /**************************/
	getChange24h(id:string):Observable<Coin[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<Coin[]>(`https://coinranking1.p.rapidapi.com/coin/${id}?timePeriod=24h`,
		{
		 "headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}
			})	

		}
		getChange7d(id:string):Observable<Coin[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<Coin[]>(`https://coinranking1.p.rapidapi.com/coin/${id}?timePeriod=7d`,
		{
		 "headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}
			})	

		}
		getChange30d(id:string):Observable<Coin[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<Coin[]>(`https://coinranking1.p.rapidapi.com/coin/${id}?timePeriod=30d`,
		{
		 "headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}
			})	

		}

///////////////////////////////////////////////////////////////



/************************** get coin history /**************************/

	getCoinHistory24H(id:string):Observable<CoinHistory[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<CoinHistory[]>(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${id}&timePeriod=24h`,
		{
		"headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}			})	
	}



	getCoinHistory1W(id:string):Observable<CoinHistory[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<CoinHistory[]>(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${id}&timePeriod=7d`,
		{
		"headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}			})	
	}


	getCoinHistory30D(id:string):Observable<CoinHistory[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<CoinHistory[]>(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${id}&timePeriod=30d`,
		{
		"headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}			})	
	}


	getCoinHistory1Y(id:string):Observable<CoinHistory[]>{
		this.env.sharedKey.subscribe(apikey=>this.apikey = apikey)
		return this.http.get<CoinHistory[]>(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${id}&timePeriod=1y`,
		{
		"headers": {

			 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
		         'x-rapidapi-key': this.apikey
			}			})	
	}


///////////////////////////////////////////////////////

/*	getChart(p1:string, p2:string, p3:string, d1:number, d2:number, d3:number):<History[]>{
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [d1, d2, d3],
        datasets: [{
            label: 'USD Price / week',
            data: [p1, p2, p3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            	}
            }
    	}
    });


*/

}



/*
***TimeStamp***
24h->/5min (300.000 ms) = 288values
7d->/60min (3.600.000 ms) = 168values
30d->/60min (3.600.000 ms) = 720 values
1y->/24h (86.400.000 ms) = 366 values
5y->24h (86.400.000 ms)
le format a ete change entre la v1 et v2 il faut multiplier les resultats par 1000
*/
/*isouidi444@gmail*/