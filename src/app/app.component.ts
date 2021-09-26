import { Component } from '@angular/core';
import { AlberguesPageModule } from './albergues/albergues.module';
import { AlberguesPage } from './albergues/albergues.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Deslizamientos', url: 'deslizamiento', icon: 'Earth' },
    { title: 'Inundaciones', url: 'inundaciones', icon: 'rainy' },
    { title: 'Rescate', url: 'rescate', icon: 'shield-checkmark' },
    { title: 'Persona Desaparecidas', url: 'desaparecidos', icon: 'accessibility' },
    { title: 'Terremoto', url: 'terremoto', icon: 'barcode' },
    { title: 'Despeje de Árbol', url: 'despeje', icon: 'leaf' },
    { title: 'Albergues', url: 'albergues', icon: 'home' },
  ];

  constructor() {}
}
