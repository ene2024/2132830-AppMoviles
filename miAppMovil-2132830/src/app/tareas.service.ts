import { Injectable } from '@angular/core';
import { Tarea } from 'src/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas: Tarea[] = [
    {
      titulo: 'Llevar a Bruno al veterinario',
      fechaMes: 5,
      fechaAnio: 2024,
      descripcion: 'LLevar al perro a las 10 am'
    },
    {
      titulo: 'Recordar Tarea de Aplicaciones Moviles',
      fechaMes: 5,
      fechaAnio: 2024,
      descripcion: 'Hacer tarea de servicios'
    }
  ];

  getTareas() {
    return this.tareas;
  }

  agregarTarea(tareaNueva: Tarea) {
    this.tareas.push(tareaNueva);
  }

  deleteTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
