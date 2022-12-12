import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autentificacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
     {
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]],
      // deviceInfo:this.formBuilder.group({ //no se si esto va 
      //  deviceId: ["17867868768"],
      // deviceType: ["DEVICE_TYPE_ANDROID"],
      //  notificationToken:["67657575eececc34"] //revisar como se se obtienen estos datos que cambian segun diespositivo
     // })


     } 
    )
   }

  ngOnInit(): void {
  }

  get Username()
  {
    return this.form.get('username')
  }
  
  get Password()
  {
    return this.form.get('password')
  }

  onEnviar(event:Event)

  { 
  event.preventDefault;
  this.autentificacionService.IniciarSesion(this.form.value).subscribe(data=>{
    console.log("DATA" + JSON.stringify(data));
    this.ruta.navigate(['/backoffice']);

  })

  }
}
