import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { DataV2 } from '../../../models/datav2';
import { Coin } from '../../../models/coin';
import { BuyCrypto } from '../../../models/buy-crypto';
import { HttpRequestService } from '../../../services/http-request.service';
import { TransactionsService } from '../../../services/transactions.service';
import { IdentificationService } from '../../../services/identification.service';
import { ToastService } from '../../../services/toast.service';



@Component({
  selector: 'app-buy-crypto',
  templateUrl: './buy-crypto.component.html',
  styleUrls: ['./buy-crypto.component.scss'],
})


export class BuyCryptoComponent implements OnInit {


       id: string;
       userId: string;
       walletId: string;
       coinItem: Coin[];
       buyCrypto: BuyCrypto[];
       data: DataV2[];
       coinUrl: string;
       coinSymbol: string;
       coinPrice: number;
       sumInCurrency: number;
       toNumber: number;
       lastIndex: number;
       firstIndex: string;
       currencySum: string;
       coinSum: string;
       coin: string;
       flux: string;
       totalCurrency: string;
       totalCoin: string;
       priceAttribute: string;
       option: any;
       option1: any;
       select: any;
       buttonText: string;
       @Input() inputCurrency: string = '0';
       @Input() symbolCurrency: string = '$';
       @Input() symbolCoin: string = "" ;
       @Input() priceCoin: number = 0;
       @Input() currency: string = 'USD';
       @Input() coinName: string;


  constructor(private http: HttpRequestService, private route: ActivatedRoute, private transactionsService: TransactionsService, private alertController: AlertController, private toast: ToastService, private router: Router) { }



  ngOnInit() {
  
    this.id = this.route.snapshot.paramMap.get('id');
    this.userId = sessionStorage.getItem('user_id');
    this.select = document.querySelector('.custom-options');
    this.buttonText = ".";

    this.http.getCoin(this.id)
    .subscribe((res)=>{
	    this.coinItem = res['data'].coin;
	    this.coinUrl = this.coinItem['iconUrl'];
	    this.coinSymbol = this.coinItem['symbol'];
	    this.coinPrice = this.coinItem['price'];
	    this.coinName = this.coinItem['name'];
	    this.priceCoin = this.coinPrice;
	    this.symbolCoin = this.coinSymbol;
	    this.option1 = document.createElement('option');
	    this.select.appendChild(this.option1)
	    this.option1.innerText = this.coinName;

    		    })
	}


  dataFromChild($event){
	this.inputCurrency = $event
	}



/****Convertisseur****/


  selectCrypto(){
    this.http.getAllCoins()
      .subscribe((res)=>{
	this.data = res['data'].coins;
	this.option1.style.display='none'
	this.data.forEach((element)=>{
		this.option = document.createElement('option');
		this.option.innerText = element['name']
		this.option.setAttribute("price", element['price']);
		this.option.setAttribute("symb", element['symbol']);


		this.select.appendChild(this.option)
		this.option.addEventListener('click', (event)=>{
			let inputPriceValue = (<HTMLInputElement>event.target).attributes['price'];
			let inputSymbolValue = (<HTMLInputElement>event.target).attributes['symb'];
			this.priceAttribute = inputPriceValue.value;
			this.coinPrice = parseFloat(this.priceAttribute);
			this.symbolCoin = inputSymbolValue.value;
		})
				})


			})

  }


  toDollars(inputCurrency:string, currency:string){
        if(this.coinPrice>=0){
		this.priceCoin = this.coinPrice
		}
	this.toNumber = parseFloat(inputCurrency);
	if(currency==='USD'){
		this.sumInCurrency = this.toNumber/this.priceCoin;
		this.symbolCurrency = '$';
		}
	if(currency==='EUR'){
		this.sumInCurrency = (this.toNumber/this.priceCoin) / 1.10;
		this.symbolCurrency = '???';
		}
 	return this.sumInCurrency
	}


/****FormSubmit****/

  onSubmit(form: NgForm){
    this.buyCrypto = form.value;
    this.currency = this.buyCrypto['currency'];

  }


  onSend(form: NgForm){
    this.buyCrypto = form.value;

    this.currencySum = this.buyCrypto['currencySum'];
    this.currency = this.buyCrypto['currency'];
    this.coinSum = this.buyCrypto['coinSum'];
    this.coin = this.buyCrypto['coin'];
    this.flux = "income";

    this.transactionsService.isWalletCreatedService(this.userId, this.coin)
    .subscribe(
		(res)=>{
			this.walletId = res['token'];
			sessionStorage.setItem('wallet_id', this.walletId);
			this.transactionsService.journalCreationService(this.flux, this.currencySum, this.walletId, this.currency, this.coinSum, this.coin)
			.subscribe(
				(res)=>{this.toast.successJournalToast()
					this.router.navigate(['folders', 'folder'])}
					//ici la redirection devra se faire sur le journal des transactions
					)
  },
		(err)=>{
			this.presentAlert();
			  }
			)
	

  

   }


 async  presentAlert() {
        const alert = await this.alertController.create({
      	cssClass: 'my-custom-class',
	subHeader: 'Missing wallet',
      	message: `You haven't proceed any transactions on ${this.coin} yet. Create a wallet and pursue transaction?`,
      	buttons: [
		{
		 text: 'Cancel',
		 role: 'Cancel',
		 cssClass: 'secondary',
		 id: 'cancel-button',
		 },
		 {
		 text: 'Create wallet',
		 id: 'confirm-button',
		 handler: ()=>{
		 	  this.transactionsService.walletCreationService(this.userId, this.coin)
			  .subscribe(
				(res)=>{
					this.toast.successWalletToast();
					this.transactionsService.isWalletCreatedService(this.userId, this.coin)
    					.subscribe(
						(res)=>{
							this.walletId = res['token'];
							sessionStorage.setItem('wallet_id', this.walletId);
							this.transactionsService.journalCreationService(this.flux, this.currencySum, this.walletId, this.currency, this.coinSum, this.coin)
							.subscribe(
								(res)=>{this.router.navigate(['folders', 'folder']);
									setTimeout(()=>{this.toast.successJournalToast()},800);
									},
								(err)=>{this.toast.errorToast()}
									)
  										},
				(err)=>{this.toast.errorToast()}
				);
		 	  })
		 }
		}
	]	
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }



 }
 