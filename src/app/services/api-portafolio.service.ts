import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';
import { EnlaceGrp } from '../interfaces/enlace-grp';
import { Proyecto } from '../interfaces/proyecto';
import { Youtube } from '../interfaces/youtube';
import { environment } from '../../environments/environment';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class ApiPortafolioService {
  private _apiUrl = environment.API_URL;
  private readonly _http = inject(HttpClient);
  
  constructor() { }

  getProyecto(): Observable<Proyecto[]> {
    return this._http.get<Proyecto[]>(`${this._apiUrl}/projects`); 
  }

  getYoutubes(): Observable<Youtube[]> {
    return this._http.get<Youtube[]>(`${this._apiUrl}/youtubes`);
  }
  
  getEnlaces(): Observable<EnlaceGrp[]> {
    return this._http.get<EnlaceGrp[]>(`${this._apiUrl}/enlaces`);
  }
}
