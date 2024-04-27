import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from 'src/tareas';
import { TareasService } from '../tareas.service';

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
  
  constructor(private modalController: ModalController, public tareaServicio: TareasService) {}

  tareaArray: Tarea[] = this.tareaServicio.tareas;

  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarTareaComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      if(dataReturned.data) {
        this.ImprimirTarea = dataReturned.data; 
        console.log(this.ImprimirTarea);
        this.tareaServicio.agregarTarea(this.ImprimirTarea);
      }
    });
    return await modal.present();
  }
  ngOnInit() {}

}
