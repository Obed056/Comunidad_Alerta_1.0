import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeslizamientoPageRoutingModule } from './deslizamiento-routing.module';

import { DeslizamientoPage } from './deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeslizamientoPageRoutingModule
  ],
  declarations: [DeslizamientoPage]
})
export class DeslizamientoPageModule {}
