import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IdentificationPage } from './identification.page';

const routes: Routes = [
      	
	{  path: '',
           component: IdentificationPage,
/*	   children: [
	   	{ path: 'login', component: LoginComponent },
		{ path: 'signup', component: SignupComponent },
	   	]*/
	   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificationPageRoutingModule {}
