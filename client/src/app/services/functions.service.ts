import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

       changeStatus:string;
       sumCryptos: number;
       symbolCurrency: string;
       toNumber: number;

  constructor() { }

        setDate(timeStampToDate:Date){
                var day = timeStampToDate.getDay();
                var month = timeStampToDate.getMonth();
                var year = timeStampToDate.getFullYear();
		var dayString;
		var monthString;
		if(day===0){day++}
                if(month===0){month=1}

                if(day<10){dayString = `0${day}`;}
                if(month<10&&month>0){monthString = `0${month}`}

                var fullDateFr = `${dayString}-${monthString}-${year}`
		return fullDateFr
        }


        roundDecimal(decimal:string):string{
                var x = decimal.split('.');
                var num = x[1]
                var entier = x[0]
                var mil = entier.slice(-3)
                var centMil = entier.slice(-6, -3)
                var deci = num.slice(0, 2)


                if(entier.length>=4){
                        decimal = `${centMil},${mil}.${deci}`}
                else
                        decimal = `${entier}.${deci}`

                return decimal
                }


	splitNumber(fullNumber:string){
		var fullNumber = `${fullNumber}.`;
		var endNumber = fullNumber.split('.');
		var full = endNumber[0];
		var units = full.slice(-3);
		var thousands = full.slice(-6, -3);
		var millions = full.slice(-9, -6);
		var billions = full.slice(-12, -9);
		var trillions = full.slice(-15, -12);
		/*var biggerNumber = voir pour faire un bigger number conditionnel*/

		if(full.length>=1 && full.length<4){
			fullNumber = `${units}`
		}
		else if(full.length>=4 && full.length<7){
			fullNumber = `${thousands}.${units[0]}`
		}
		else if(full.length>=7 && full.length<10){
			fullNumber = `${millions}.${thousands[0]}M`
		}
		else if(full.length>=10 && full.length<13){
			fullNumber = `${billions}.${millions[0]}B`
		}
		else if(full.length>=13 && full.length<=16){
		     	fullNumber = `${trillions}.${billions[0]}T`
		}
		else{
			return "no data"
		}
		
		return fullNumber
	}


	htmlToString(element:string){
		var sectionTag = document.querySelector('#description');
		sectionTag.insertAdjacentHTML('afterbegin', element);

	}

	getStatus(changeVal:string){
		if(changeVal[0]==='-'){
		this.changeStatus = 'decreased'}
		else if(changeVal[0]!= '-'){
		this.changeStatus = 'increased';
		changeVal = `+${changeVal}`}
		else{
		changeVal = ''}

		return changeVal
		}


	getColor(changeStatus:string){
		changeStatus = this.changeStatus
		return this.changeStatus === 'decreased' ? '#ff1100' : '#23e82d'
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
