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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
