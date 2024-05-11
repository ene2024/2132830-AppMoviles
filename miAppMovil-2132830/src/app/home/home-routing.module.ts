import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TareaComponent } from '../tarea/tarea.component';
import { VistaDetalleComponent } from '../vista-detalle/vista-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    redirectTo: '/tarea',
    pathMatch: 'full'
  },
  {
    path: 'tarea',
    component: TareaComponent
  },
  {
    path: 'tarea/:id',
    component: VistaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
