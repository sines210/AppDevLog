import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Router, NavigationExtras } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from  './components/identification/signup/signup.component';
import { LogoutComponent } from './components/identification/logout/logout.component';
import { UpdatePasswordComponent } from './components/identification/update-password/update-password.component';
import { RemoveAccountComponent } from './components/identification/remove-account/remove-account.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { PadComponent } from './components/tools/pad/pad.component';
import { PinCirclesComponent } from './components/tools/pin-circles/pin-circles.component';
import { CircleComponent } from './components/tools/circle/circle.component';
import { PinRequiredComponent } from './components/pin-required/pin-required.component';
import { WalletPage } from './components/wallet/wallet.page';
import { BuyCryptoComponent } from './components/wallet/buy-crypto/buy-crypto.component';
import { CryptoSimulatorComponent } from './components/crypto-simulator/crypto-simulator.component';
import { ModalListComponent } from './components/modal-list/modal-list.component';
import { Modal1Component } from './components/modal1/modal1.component';
import { Modal2Component } from './components/modal2/modal2.component';


@NgModule({
  declarations: [AppComponent,
  		SignupComponent,
		FourOFourComponent,
		LogoutComponent,
		UpdatePasswordComponent,
		RemoveAccountComponent,
		RecoveryComponent,
		PadComponent,
		PinCirclesComponent,
		CircleComponent,
		PinRequiredComponent,
		WalletPage,
		BuyCryptoComponent,
		CryptoSimulatorComponent,
		ModalListComponent,
		Modal1Component,
		Modal2Component],
		
  entryComponents: [],
  
  imports: [BrowserModule,
  	   IonicModule.forRoot(),
	   AppRoutingModule,
	   HttpClientModule,
	   FormsModule,
	   ReactiveFormsModule,
	   ],
	   
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  
  bootstrap: [AppComponent],
})

export class AppModule {}
