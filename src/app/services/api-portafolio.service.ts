import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';
import { EnlaceGrp } from '../interfaces/enlace-grp';
import { Proyecto } from '../interfaces/proyecto';
import { Youtube } from '../interfaces/youtube';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPortafolioService {
  private _apiUrl = environment.API_URL;
  private readonly _http = inject(HttpClient);
  
  constructor() { }

  getProyecto(): Observable<ResponseApi<Proyecto[]>> {
    return this._http.get<ResponseApi<Proyecto[]>>(`${this._apiUrl}/Proyecto`);
  }

  getYoutubes(): Observable<ResponseApi<Youtube[]>> {
    return this._http.get<ResponseApi<Youtube[]>>(`${this._apiUrl}/Youtube`);
  }
  
  getEnlaces(): Observable<ResponseApi<EnlaceGrp[]>> {
    return this._http.get<ResponseApi<EnlaceGrp[]>>(`${this._apiUrl}/Enlace`);
  }
}
