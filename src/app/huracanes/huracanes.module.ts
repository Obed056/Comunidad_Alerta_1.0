import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuracanesPageRoutingModule } from './huracanes-routing.module';

import { HuracanesPage } from './huracanes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuracanesPageRoutingModule
  ],
  declarations: [HuracanesPage]
})
export class HuracanesPageModule {}
