import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyectosInterface } from 'src/assets/data/proyectosInterface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url:string="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<proyectosInterface>{
    return this.http.get<any>(this.url+"ver/proyectos")
}

  
public proyectos: proyectosInterface | boolean = false;
 
    public getProyecto(): proyectosInterface    | boolean {
        return this.proyectos;
    }
 
    public setProyecto(proyectos: proyectosInterface): void {
        this.proyectos = proyectos;
    }
    agregarProyecto(body: any):Observable<any> {
        return this.http.post(this.url+"actualizar/proyecto", body);
    }



}
