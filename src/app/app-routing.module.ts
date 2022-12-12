import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './componentes/admin/backoffice/backoffice.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path:'' , component:IndexComponent},
  { path:'login' , component:LoginComponent},
  { path:'registro' , component:RegistroComponent},
  { path:'backoffice' , component:BackofficeComponent},
  

  
  //{ path:'**' , component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
