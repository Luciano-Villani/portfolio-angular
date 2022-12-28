import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortadaAcercadeComponent } from './componentes/portada-acercade/portada-acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionSkillsComponent } from './componentes/formacion-skills/formacion-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BackofficeComponent } from './componentes/admin/backoffice/backoffice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatosPorfolioService } from './servicios/datosPorfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarBOComponent } from './componentes/admin/navbar-bo/navbar-bo.component';
import { SeccionesBOComponent } from './componentes/admin/secciones-bo/secciones-bo.component';
import { FormularioProyectosComponent } from './componentes/admin/backoffice/Formularios/formulario-proyectos/formulario-proyectos.component';
import { NavBarFormComponent } from './componentes/admin/backoffice/Formularios/nav-bar-form/nav-bar-form.component';
import { InformacionFormComponent } from './componentes/admin/backoffice/Formularios/informacion-form/informacion-form.component';
import { ExperienciaFormComponent } from './componentes/admin/backoffice/Formularios/experiencia-form/experiencia-form.component';
import { FormacionFormComponent } from './componentes/admin/backoffice/Formularios/formacion-form/formacion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    PortadaAcercadeComponent,
    ExperienciaComponent,
    FormacionSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    BackofficeComponent,
    NavbarBOComponent,
    SeccionesBOComponent,
    FormularioProyectosComponent,
    NavBarFormComponent,
    InformacionFormComponent,
    ExperienciaFormComponent,
    FormacionFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavBarFormComponent
  ]
})
export class AppModule { }
