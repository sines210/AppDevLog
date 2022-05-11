import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FoldersPageRoutingModule } from './folders-routing.module';

import { FoldersPage } from './folders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FoldersPageRoutingModule
  ],
  declarations: [FoldersPage]
})
export class FoldersPageModule {}
