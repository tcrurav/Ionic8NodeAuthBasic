import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouAreLoggedInPage } from './you-are-logged-in.page';

const routes: Routes = [
  {
    path: '',
    component: YouAreLoggedInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouAreLoggedInPageRoutingModule {}
