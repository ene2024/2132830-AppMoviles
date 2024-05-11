import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.scss'],
})
export class VistaDetalleComponent  implements OnInit {

  constructor(private ruta : ActivatedRoute, private servicio: TareasService) { }

  ngOnInit() {}

  idTarea: string = this.ruta.snapshot.params['id'];

  vistaTarea = this.servicio.getVistaDetalle(this.idTarea);
}
