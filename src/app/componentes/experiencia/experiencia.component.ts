import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  miExperiencia:any;

  constructor(private datosPorfoio:ExperienciaService) { }

  ngOnInit(): void {
    this.datosPorfoio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miExperiencia=data;
  });

}
}