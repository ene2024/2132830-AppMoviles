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

  tareas: Tarea[] = [];
  
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent,
    });
    return await modal.present();
  }

  agregarTarea(nuevaTarea: Tarea) {
    this.tareas.push(nuevaTarea);
  }

  ngOnInit() {}

}
