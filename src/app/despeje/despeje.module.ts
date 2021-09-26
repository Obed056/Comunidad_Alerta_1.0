import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespejePageRoutingModule } from './despeje-routing.module';

import { DespejePage } from './despeje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespejePageRoutingModule
  ],
  declarations: [DespejePage]
})
export class DespejePageModule {}
