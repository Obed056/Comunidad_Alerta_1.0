import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesaparecidosPageRoutingModule } from './desaparecidos-routing.module';

import { DesaparecidosPage } from './desaparecidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesaparecidosPageRoutingModule
  ],
  declarations: [DesaparecidosPage]
})
export class DesaparecidosPageModule {}
