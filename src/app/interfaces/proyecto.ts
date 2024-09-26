import { Lenguaje } from "./lenguaje";
import { Tecnologia } from "./tecnologia";

export interface Proyecto {
  id: number,
  name: string,
  imgUrl: string,
  languages: Lenguaje[],
  technologies: Tecnologia[]
}
