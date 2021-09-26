import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/folder/Bienvenido',  //llamamos el menu principal
    //redirectTo: 'login', //llamamos el login
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'deslizamiento',
    loadChildren: () => import('./deslizamiento/deslizamiento.module').then( m => m.DeslizamientoPageModule)
  },
  {
    path: 'inundaciones',
    loadChildren: () => import('./inundaciones/inundaciones.module').then( m => m.InundacionesPageModule)
  },
  {
    path: 'rescate',
    loadChildren: () => import('./rescate/rescate.module').then( m => m.RescatePageModule)
  },
  {
    path: 'desaparecidos',
    loadChildren: () => import('./desaparecidos/desaparecidos.module').then( m => m.DesaparecidosPageModule)
  },
  {
    path: 'terremoto',
    loadChildren: () => import('./terremoto/terremoto.module').then( m => m.TerremotoPageModule)
  },
  {
    path: 'despeje',
    loadChildren: () => import('./despeje/despeje.module').then( m => m.DespejePageModule)
  },
  {
    path: 'albergues',
    loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
