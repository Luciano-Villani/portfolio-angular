import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { informacionInterface } from 'src/assets/data/informacionInterface';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<informacionInterface>{
    return this.http.get<any>(this.url+"ver/informacion1")
}
public informacion: informacionInterface | boolean = false;
 
    public getInformacion(): informacionInterface    | boolean {
        return this.informacion;
    }
 
    public setInformacion(informacion: informacionInterface): void {
        this.informacion = informacion;
    }
    agregarInformacion(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/informacion", body);
  }
  borrarInformacion(id: number):Observable<any> { 
    return this.http.delete(this.url + "informacion/delete/" + id);
}
}