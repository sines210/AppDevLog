import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinFolderPage } from './coin-folder.page';

const routes: Routes = [
  {
    path: '',
    component: CoinFolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinFolderPageRoutingModule {}
