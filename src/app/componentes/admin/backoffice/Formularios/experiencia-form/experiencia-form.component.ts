import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent implements OnInit {
  misExperienciasBO:any;

  constructor(private datosExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    //this.datosExperiencia.obtenerDatos().subscribe(data=>{
    //console.log(data);
     // this.misExperienciasBO=data;
   // });

   console.log(this.datosExperiencia.getExperiencia())
   
    
   }
  }

  