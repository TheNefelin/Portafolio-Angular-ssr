import { Enlace } from "./enlace";

export interface EnlaceGrp {
  id: number,
  nombre: string,
  estado: number,
  enlaces: Enlace[],
}
