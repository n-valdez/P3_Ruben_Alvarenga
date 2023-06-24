import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MascotasResponse } from '../interface/MascotasResponse';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  

  constructor(private http: HttpClient) { }

  getMascotasPorCliente(clienteId: string){
    var url='https://www.hostcatedral.com/api/appCatalogoLibro/public/getMascotasPorCliente/' + clienteId;
    let options = {
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    };

    return this.http.get<MascotasResponse[]>(url,options);
  }
}
