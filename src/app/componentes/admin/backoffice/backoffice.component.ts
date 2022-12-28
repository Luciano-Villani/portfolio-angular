import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { NavBarService } from 'src/app/servicios/nav-bar.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  misExperienciasBO:any;
  miFormacionBO:any;
  

  constructor(private datosPorfolio:ExperienciaService, private datosFormacion:FormacionService, ) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misExperienciasBO=data;
  });
  this.datosFormacion.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.miFormacionBO=data;
  });
  

}
}