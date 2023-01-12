import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { informacionInterface } from 'src/assets/data/informacionInterface';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<informacionInterface>{
    return this.http.get<any>(this.url+"ver/informacion1")
}
public informacion: informacionInterface | boolean = false;
 
    public getInformacio(): informacionInterface    | boolean {
        return this.informacion;
    }
 
    public setInformacion(informacion: informacionInterface): void {
        this.informacion = informacion;
    }

}