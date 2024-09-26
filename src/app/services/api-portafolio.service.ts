import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
    return this._http.get<ResponseApi<Proyecto[]>>(`${this._apiUrl}/projects`).pipe(
      map((resp: ResponseApi<Proyecto[]>) => resp.data)
    ); 
  }

  getYoutubes(): Observable<Youtube[]> {
    return this._http.get<ResponseApi<Youtube[]>>(`${this._apiUrl}/youtube`).pipe(
      map((res: ResponseApi<Youtube[]>) => res.data)
    );
  }
  
  getEnlaces(): Observable<EnlaceGrp[]> {
    return this._http.get<ResponseApi<EnlaceGrp[]>>(`${this._apiUrl}/urls`).pipe(
      map((res: ResponseApi<EnlaceGrp[]>) => res.data)
    );
  }
}
