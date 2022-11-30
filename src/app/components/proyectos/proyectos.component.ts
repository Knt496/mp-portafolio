import { Component } from '@angular/core';
import ProyectoService from 'src/app/services/proyecto.service';
import Proyecto from 'src/app/Proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  proyectos!: Proyecto[] | null;

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectos = this.proyectoService.get_proyectos();
  }

}
