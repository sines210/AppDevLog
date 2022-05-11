import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { IdentificationPageRoutingModule } from './identification-routing.module';
import { IdentificationPage } from './identification.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IdentificationPageRoutingModule
  ],
  declarations: [IdentificationPage,
  		 LoginComponent]
})
export class IdentificationPageModule {}
