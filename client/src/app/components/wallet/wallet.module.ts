import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';
import { WalletPage } from './wallet.page';
 import { BuyCryptoComponent } from './buy-crypto/buy-crypto.component';
import { PadComponent } from '../tools/pad/pad.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WalletPageRoutingModule
  ],

})
export class WalletPageModule {}
