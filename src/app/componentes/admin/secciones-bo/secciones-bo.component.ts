import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FormacionService } from 'src/app/servicios/formacion.service';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionService } from 'src/app/servicios/informacion.service';
import { HardSkillsService } from 'src/app/servicios/hard-skills.service';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-secciones-bo',
  templateUrl: './secciones-bo.component.html',
  styleUrls: ['./secciones-bo.component.css']
})
export class SeccionesBOComponent implements OnInit {
  misExperienciasBO:any;
  miFormacionBO:any;
  misRedesBO:any;
  miInformacionBO:any;
  misHardskillsBO: any;
  misSoftskillsBO: any;
  misProyectosBO: any;
  proyectoActual: any;
  softSkillActual: any;
  hardSkillActual: any;
  formacionActual: any;
  experienciaActual: any;
  informacionActual: any;
  redActual: any;

  experienciaForm: FormGroup;
  redesForm: FormGroup;
  infoForm: FormGroup;
  formacionForm: FormGroup;
  hardskillsForm: FormGroup;
  softskillsForm: FormGroup;
  proyectosForm: FormGroup;


  constructor(private datosExperiencia:ExperienciaService, private datosFormacion:FormacionService,
     private datosRedes:NavBarService, private datosInfo:InformacionService,
     private formBuilder:FormBuilder, private datosHardskills:HardSkillsService, private datosSoftskills:SoftSkillsService,
      private datosProyectos:ProyectosService,) {
    
    
   
    this.experienciaForm = this.formBuilder.group({
      id: [''],
      img_src: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      periodo: ['', [Validators.required]],
          
    
    });
    this.redesForm = this.formBuilder.group({
      id: [''],
      urlDestino: ['', [Validators.required]],
      icon: ['', [Validators.required]],
      
      
    });
    this.infoForm = this.formBuilder.group({
      id: [''],
      linea1: [''],
      linea2: [''],
      linea3: [''],
      linea4: [''],
      
      
    });
  
  this.formacionForm = this.formBuilder.group({
    id: [''],
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    referencia: ['', [Validators.required]],
  });

  this.hardskillsForm = this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    porcentaje: ['', [Validators.required]],
    
  });

  this.softskillsForm = this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    porcentaje: ['', [Validators.required]],
    
  });
  this.proyectosForm = this.formBuilder.group({
    id: [''],
    img_src: ['', [Validators.required]],
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    link_ver_mas: ['', [Validators.required]],
     
 });
   
   }




  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misExperienciasBO=data;
  });
  this.datosFormacion.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.miFormacionBO=data;
  });
  this.datosRedes.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.misRedesBO=data;
  });
  this.datosInfo.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.miInformacionBO=data;
  });
  this.datosHardskills.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.misHardskillsBO=data;
  });
  this.datosSoftskills.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.misSoftskillsBO=data;
  });
  this.datosProyectos.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.misProyectosBO=data;
  });
}



selecRed(redes:any){
  console.log(redes);
  this.redActual = redes;
  this.redesForm.setValue({
    id: redes.id,
    urlDestino: redes.urlDestino,
    icon: redes.icon,

  })
}
selecExp(experiencias:any){
  console.log(experiencias);
  this.experienciaActual = experiencias;
  
  this.experienciaForm.setValue({
    id: experiencias.id,
    img_src: experiencias.img_src,
    titulo: experiencias.titulo,
    descripcion: experiencias.descripcion,
    periodo: experiencias.periodo,
    
  })
}
selecInfo(informacion:any){
  console.log(informacion);

 this.informacionActual = informacion;
  
  this.infoForm.setValue({
    id: informacion.id,
    linea1: informacion.linea1,
    linea2: informacion.linea2,
    linea3: informacion.linea3,
    linea4: informacion.linea4,
    
  })
}
selecFormacion(formacion:any){
  console.log(formacion);
  this.formacionActual = formacion;
  
  this.formacionForm.setValue({
    id: formacion.id,
    titulo: formacion.titulo,
    descripcion: formacion.descripcion,
    referencia: formacion.referencia,
    
    
  })
}
selecHardSkill(hardskill:any){
  console.log(hardskill);
  this.hardSkillActual = hardskill;
  
  this.hardskillsForm.setValue({
    id: hardskill.id,
    nombre: hardskill.nombre,
    porcentaje: hardskill.porcentaje,
        
    
  })

}
selecSoftSkill(softskill:any){
  console.log(softskill);

  this.softSkillActual = softskill;
  
  this.softskillsForm.setValue({
    id: softskill.id,
    nombre: softskill.nombre,
    porcentaje: softskill.porcentaje,
        
    
  })
  
}

selecProyecto(proyecto:any){
 console.log(proyecto);
   
 this.proyectoActual = proyecto;

  this.proyectosForm.setValue({
    id: proyecto.id,
    img_src: proyecto.img_src,
    titulo: proyecto.titulo,
    descripcion: proyecto.descripcion,
    link_ver_mas: proyecto.link_ver_mas,  

     
    
  })
  

}

onEnviar(event:Event)


  { 
  event.preventDefault;
  this.datosProyectos.agregarProyecto(this.proyectosForm.value).subscribe(data=>{
    //console.log("DATA" + JSON.stringify(data));
    console.log(data);
    if (this.proyectosForm.valid){
      alert("Datos Guardados");
      window.location.reload()
    } else {
      alert("Error")
    }

  })

  
}

onEliminar()

{
  
  this.datosProyectos.borrarProyecto(this.proyectoActual.id).subscribe(data=>{
    console.log(data);
    if (this.proyectosForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })

}


 //validacion
 // get Img_src()
 //{
 //  return this.proyectosForm.get('img_src')
 // }
 
 
 onEnviarSoftSkill(event:Event)


 { 
 event.preventDefault;
 this.datosSoftskills.agregarSoftSkill(this.softskillsForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.softskillsForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })

 
}

onEliminaroftskill()

{
  
  this.datosSoftskills.borrarSoftSkill(this.softSkillActual.id).subscribe(data=>{
    console.log(data);
    if (this.softskillsForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })

}

onEnviarHardSkill(event:Event)


 { 
 event.preventDefault;
 this.datosHardskills.agregarHardSkill(this.hardskillsForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.hardskillsForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })

 
}
onEliminarHardskill()

{
  
  this.datosHardskills.borrarHardSkill(this.hardSkillActual.id).subscribe(data=>{
    console.log(data);
    if (this.hardskillsForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })

}
onEnviarFormacion(event:Event)


 { 
 event.preventDefault;
 this.datosFormacion.agregarFormacion(this.formacionForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.formacionForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })

}
onEliminarFormacion()

{
  
  this.datosFormacion.borrarFormacion(this.formacionActual.id).subscribe(data=>{
    console.log(data);
    if (this.formacionForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })
}

onEnviarExperiencia(event:Event)


 { 
 event.preventDefault;
 this.datosExperiencia.agregarExperiencia(this.experienciaForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.experienciaForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })
}
onEliminarExperiencia()

{
  
  this.datosExperiencia.borrarExperiencia(this.experienciaActual.id).subscribe(data=>{
    console.log(data);
    if (this.experienciaForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })
}
onEnviarInformacion(event:Event)


 { 
 event.preventDefault;
 this.datosInfo.agregarInformacion(this.infoForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.infoForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })
}
//onEliminarInformacion()

//{
  
 // this.datosInfo.borrarInformacion(this.informacionActual.id).subscribe(data=>{
 //   console.log(data);
  //  if (this.infoForm.valid){
 //     alert("Registro borrado correctamente");
  //    window.location.reload()
  //  } else {
  //    alert("Error")
  //  }
    
 // })
//}
onEnviarRed(event:Event)


 { 
 event.preventDefault;
 this.datosRedes.agregarRed(this.redesForm.value).subscribe(data=>{
   //console.log("DATA" + JSON.stringify(data));
   console.log(data);
   if (this.redesForm.valid){
    alert("Datos guardados correctamente");
    window.location.reload()
  } else {
    alert("Error")
  }

 })

 }
 onEliminarRed()

{
  
  this.datosRedes.borrarRed(this.redActual.id).subscribe(data=>{
    console.log(data);
    if (this.redesForm.valid){
      alert("Registro borrado correctamente");
      window.location.reload()
    } else {
      alert("Error")
    }
    
  })
}
}

