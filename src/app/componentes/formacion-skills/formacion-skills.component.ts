import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { HardSkillsService } from 'src/app/servicios/hard-skills.service';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';

@Component({
  selector: 'app-formacion-skills',
  templateUrl: './formacion-skills.component.html',
  styleUrls: ['./formacion-skills.component.css']
})
export class FormacionSkillsComponent implements OnInit {
  miFormacion:any;
  misHardskills:any;
  misSoftskills:any;

  constructor(private datosFormacion:FormacionService, private datosHardSkills:HardSkillsService, private datosSoftSkills:SoftSkillsService) { }

  ngOnInit(): void {
    this.datosFormacion.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miFormacion=data;  });

    this.datosHardSkills.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misHardskills=data;
        });

     this.datosSoftSkills.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misSoftskills=data;
        });


  }

}
