import { Injectable } from '@angular/core';
import Proyecto from '../Proyecto';
import Hero from '../Hero';
import { proyectos } from '../mock-datos';

@Injectable({
  providedIn: 'root'
})
export default class ProyectoService {
  datos: Proyecto[] = proyectos;

  constructor() { }

  get_proyectos(): Proyecto[] | null {
    return this.datos;
  }

  get_proyecto(id: number): Proyecto | undefined {
    return this.datos.find((p) => p.id === id);
  }

  get_hero(id: number): Hero | undefined {
    return this.datos.find((p) => p.id === id)?.hero;
  }
}
