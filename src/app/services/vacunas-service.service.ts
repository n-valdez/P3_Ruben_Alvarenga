import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VacunacionResponse } from '../interface/VacunacionResonse';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  constructor(private http: HttpClient) { }

  getVacunasPorMascota(mascotaId: string) {
    var url='https://www.hostcatedral.com/api/appCatalogoLibro/public/getVacunasPorMascota/' + mascotaId;
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get<VacunacionResponse[]>(url,options);
}
}
