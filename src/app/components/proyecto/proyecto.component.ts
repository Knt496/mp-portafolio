import { Component } from '@angular/core';
import Proyecto from 'src/app/Proyecto';
import ProyectoService from 'src/app/services/proyecto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent {

  proyecto!: Proyecto | undefined;
  idProyecto!: number;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idProyecto = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    console.log(this.idProyecto);
    this.proyecto   = this.proyectoService.get_proyecto(this.idProyecto);
    console.log("hola",this.proyecto);
  }

}
