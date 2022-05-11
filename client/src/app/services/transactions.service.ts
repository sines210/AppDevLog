import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class TransactionsService {

  constructor(private http: HttpClient) { }

  crypto: string;
  userId: string;

  walletCreationService(userId:string, currency:string): Observable<any>{
  	return this.http.post('http://localhost:5000/create-wallet', {userId, currency}, {headers: {'content-type' :'application/json'}})
  		}


  journalCreationService(flux:string, transaction_amount:string, walletId:string, currency:string, crypto_amount:string, crypto:string): Observable<any>{
  	return this.http.post('http://localhost:5000/create-journal', {flux, transaction_amount, currency, crypto, walletId, crypto_amount}, {headers: {'content-type' :'application/json'}})
  		}


  isWalletCreatedService(userId:string, currency:string): Observable<any>{
	this.crypto = currency;
	this.userId = userId;
  	return this.http.get(`http://localhost:5000/wallet-data/${userId}/${currency}`)

    }





}
	
