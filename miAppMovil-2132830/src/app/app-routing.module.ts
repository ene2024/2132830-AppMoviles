import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tarea',
    component: TareaComponent
  },
  {
    path: '',
    redirectTo: '/tarea',
    pathMatch: 'full'
  },
  {
    path: 'tarea/:id',
    component: VistaDetalleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
