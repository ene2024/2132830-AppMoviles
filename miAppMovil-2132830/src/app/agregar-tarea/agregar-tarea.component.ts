import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/tareas';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  tituloTarea: String = '';
  fechaTarea: Date = new Date();
  descripcionTarea: String = '';

  ConfirmarModal() {
    this.modalController.dismiss();
    const nuevaTarea: Tarea = {
      titulo: this.tituloTarea,
      fecha: this.fechaTarea,
      descripcion: this.descripcionTarea,
    }
  }



}
