import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuracanesPage } from './huracanes.page';

const routes: Routes = [
  {
    path: '',
    component: HuracanesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuracanesPageRoutingModule {}
