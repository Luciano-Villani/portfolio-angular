import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datosPorfolio.service';

@Component({
  selector: 'app-portada-acercade',
  templateUrl: './portada-acercade.component.html',
  styleUrls: ['./portada-acercade.component.css']
})
export class PortadaAcercadeComponent implements OnInit {
  miAcercaDe:any;

  constructor(private datosPorfoio:DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfoio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miAcercaDe=data.acercaDe;
  });

}
}