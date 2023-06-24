import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ClienteResponse} from '../interface/ClienteResponse'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiUrl = 'https://www.hostcatedral.com/api/appCatalogoLibro/public/getClientes';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<ClienteResponse[]>(this.apiUrl);
  }
}
