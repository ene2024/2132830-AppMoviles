import { Component, OnInit, ViewChild, output } from '@angular/core';
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

  nuevaTarea: Tarea = {
    titulo: '',
    fechaMes: 1,
    fechaAnio: 1,
    descripcion: ''
  };

  ConfirmarModal() {
    this.modalController.dismiss(this.nuevaTarea);
    console.log("Accion completada", this.nuevaTarea);
    /*this.tareas.push(this.nuevaTarea);*/
  }



}
