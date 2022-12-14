import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formacionInterface } from 'src/assets/data/formacionInterface';
@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"ver/formacion")
}
public formacion: formacionInterface | boolean = false;
 
    public getFormacion(): formacionInterface    | boolean {
        return this.formacion;
    }
 
    public setFormacion(formacion: formacionInterface): void {
        this.formacion = formacion;
    }
    agregarFormacion(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/formacion", body);
  }
  borrarFormacion(id: number):Observable<any> { 
    return this.http.delete(this.url + "formacion/delete/" + id);
}

}