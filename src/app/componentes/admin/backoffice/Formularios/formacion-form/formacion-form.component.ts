import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-formacion-form',
  templateUrl: './formacion-form.component.html',
  styleUrls: ['./formacion-form.component.css']
})
export class FormacionFormComponent implements OnInit {
  miFormacionBO: any;

  constructor(private datosFormacion: FormacionService) { }

  ngOnInit(): void {
 
  this.datosFormacion.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.miFormacionBO=data;
  });
  }

}
