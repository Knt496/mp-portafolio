import Hero from "./Hero";

export default interface Proyecto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  hero: Hero;
}