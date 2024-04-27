import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from 'src/tareas';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent  implements OnInit {

  ImprimirTarea: Tarea = {
    titulo: '',
    fechaMes: 1,
    fechaAnio: 1,
    descripcion: ''
  }
  tareas: Tarea[] = [
    /*{
      titulo: 'Llevar a Bruno al veterinario',
      fechaMes: 5,
      fechaAnio: 2024,
      descripcion: 'LLevar al perro a las 10 am'
    },
    {
      titulo: 'Recordar Tarea de Aplicaciones Moviles',
      fechaMes: 5,
      fechaAnio: 2024,
      descripcion: 'Hacer tarea de comunicacion entre componentes'
    }*/
  ];
  
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.ImprimirTarea = dataReturned.data;
      console.log(this.ImprimirTarea);
      this.tareas.push(this.ImprimirTarea);
    });
    return await modal.present();
  
  }
  ngOnInit() {}

}
