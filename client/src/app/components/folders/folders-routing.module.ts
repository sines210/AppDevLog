import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoldersPage } from './folders.page';
import { LogoutComponent } from '../identification/logout/logout.component';
import { UpdatePasswordComponent } from '../identification/update-password/update-password.component';
import { RemoveAccountComponent } from '../identification/remove-account/remove-account.component';
import { PinRequiredComponent } from '../pin-required/pin-required.component';
import { CryptoSimulatorComponent } from '../crypto-simulator/crypto-simulator.component';
import { RecoveryComponent } from '../recovery/recovery.component';


const routes: Routes = [

  { path: '',
    component: FoldersPage,
    children: [ 
    	{  path: 'folder',
	   loadChildren: ()=> import('../folder/folder.module').then(m=>m.FolderPageModule)},
	   
	{  path: 'coin-folder/:id',
	   loadChildren: ()=> import('../coin-folder/coin-folder.module').then(m=>m.CoinFolderPageModule)},

	{  path: 'wallet/:id',
	   loadChildren: ()=> import('../wallet/wallet.module').then(m=>m.WalletPageModule)},
	   
	{  path: 'logout', component: LogoutComponent },

	{  path: 'updatepass', component: UpdatePasswordComponent }, 

	{  path: 'removeaccount', component: RemoveAccountComponent },

	{  path: 'pinrequired', component: PinRequiredComponent },

	{  path: 'recovery', component: RecoveryComponent },

	{  path: 'cryptosimulator', component: CryptoSimulatorComponent }

	   ]	   
  },

	{  path: 'folder',
	   redirectTo: 'folders/folder',
	   pathMatch: 'full' },


	{  path: '',
	   redirectTo: 'folders/folder',
	   pathMatch: 'full' }
	   


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoldersPageRoutingModule {}

