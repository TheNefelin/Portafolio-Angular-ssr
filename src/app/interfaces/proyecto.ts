import { Lenguaje } from "./lenguaje";
import { Tecnologia } from "./tecnologia";

export interface Proyecto {
  id: number,
  nombre: string,
  imgUrl: string,
  lenguajes: Lenguaje[],
  tecnologias: Tecnologia[]
}
