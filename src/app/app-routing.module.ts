import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  //llamamos el menu principal
    //redirectTo: 'login', //llamamos el login
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
   
  },
  {
    path: 'folder/Bienvenidos',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate: [AuthGuard],
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
    loadChildren: () => import('./deslizamiento/deslizamiento.module').then( m => m.DeslizamientoPageModule),
    /* canActivate: [AuthGuard], */
  },
  {
    path: 'inundaciones',
    loadChildren: () => import('./inundaciones/inundaciones.module').then( m => m.InundacionesPageModule),
    /* canActivate: [AuthGuard], */
  },
  {
    path: 'rescate',
    loadChildren: () => import('./rescate/rescate.module').then( m => m.RescatePageModule),
    /* canActivate: [AuthGuard], */
  },
  {
    path: 'desaparecidos',
    loadChildren: () => import('./desaparecidos/desaparecidos.module').then( m => m.DesaparecidosPageModule),
    /* canActivate: [AuthGuard], */
  },
  {
    path: 'terremoto',
    loadChildren: () => import('./terremoto/terremoto.module').then( m => m.TerremotoPageModule),
   /*  canActivate: [AuthGuard], */
  },
  {
    path: 'despeje',
    loadChildren: () => import('./despeje/despeje.module').then( m => m.DespejePageModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'albergues',
    loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule),
    /* canActivate: [AuthGuard], */
  },  {
    path: 'huracanes',
    loadChildren: () => import('./huracanes/huracanes.module').then( m => m.HuracanesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
