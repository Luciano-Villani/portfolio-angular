import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { experienciaInterface } from 'src/assets/data/experienciaInterface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<experienciaInterface>{
    return this.http.get<any>(this.url+"ver/experiencias")
}
public experiencia: experienciaInterface | boolean = false;
 
    public getExperiencia(): experienciaInterface    | boolean {
        return this.experiencia;
    }
 
    public setExperiencia(experiencia: experienciaInterface): void {
        this.experiencia = experiencia;
    }
    agregarExperiencia(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/experiencia", body);
  }
  borrarExperiencia(id: number):Observable<any> { 
    return this.http.delete(this.url + "experiencia/delete/" + id);
}
}

