import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YouAreLoggedInPageRoutingModule } from './you-are-logged-in-routing.module';

import { YouAreLoggedInPage } from './you-are-logged-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouAreLoggedInPageRoutingModule
  ],
  declarations: [YouAreLoggedInPage]
})
export class YouAreLoggedInPageModule {}
