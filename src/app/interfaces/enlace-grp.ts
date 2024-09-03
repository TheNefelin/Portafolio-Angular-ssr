import { Enlace } from "./enlace";

export interface EnlaceGrp {
  Id: number,
  Nombre: string,
  Estado: number,
  Urls: Enlace[],
}
