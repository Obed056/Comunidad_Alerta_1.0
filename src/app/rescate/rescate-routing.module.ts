import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescatePage } from './rescate.page';

const routes: Routes = [
  {
    path: '',
    component: RescatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescatePageRoutingModule {}
