import { Component, OnInit } from '@angular/core';
import {ClientesService } from '../services/cliente-service.service';
import {MascotasService} from '../services/mascotas-service.service';
import {VacunasService} from '../services/vacunas-service.service'


import { ClienteResponse } from '../interface/ClienteResponse';
import { MascotasResponse } from '../interface/MascotasResponse';
import { VacunacionResponse } from '../interface/VacunacionResonse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  clientes:ClienteResponse[]=[];
  mascotas:MascotasResponse[]=[];
  vacunas: VacunacionResponse[]=[];

  clienteId: string='';
  mascotaId: string='';
  

  

  constructor(
    private clientesService: ClientesService,
    private mascotasService: MascotasService,
    private vacunasService: VacunasService
   ) {
    
    
  }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  cargarMascotasPorCliente() {
    this.mascotasService.getMascotasPorCliente(this.clienteId)
      .subscribe(
        data => {
          this.mascotas = data;
        },
        error => {
          console.error('Error al cargar las mascotas:', error);
        }
      );
  }
  
  cargarVacunasPorMascota() {

    this.vacunasService.getVacunasPorMascota(this.mascotaId)
      .subscribe(
        data => {
          this.vacunas = data;
        },
        error => {
          console.error('Error al cargar las vacunas:', error);
        }
      );
  }
  

}
