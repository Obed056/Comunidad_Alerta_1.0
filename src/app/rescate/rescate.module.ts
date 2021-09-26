import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescatePageRoutingModule } from './rescate-routing.module';

import { RescatePage } from './rescate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescatePageRoutingModule
  ],
  declarations: [RescatePage]
})
export class RescatePageModule {}
