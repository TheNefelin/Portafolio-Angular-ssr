import { Lenguaje } from "./lenguaje";
import { Tecnologia } from "./tecnologia";

export interface Proyecto {
  Id: number,
  Nombre: string,
  ImgUrl: string,
  Languages: Lenguaje[],
  Technologies: Tecnologia[]
}
