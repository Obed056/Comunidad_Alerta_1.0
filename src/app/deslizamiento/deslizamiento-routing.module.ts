import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeslizamientoPage } from './deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeslizamientoPageRoutingModule {}
