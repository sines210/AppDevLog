import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CoinFolderPageRoutingModule } from './coin-folder-routing.module';
import { CoinFolderPage } from './coin-folder.page';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinFolderPageRoutingModule,
    NgChartsModule
  ],
  declarations: [CoinFolderPage]
})
export class CoinFolderPageModule {}
