import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formacionInterface } from 'src/assets/data/formacionInterface';
@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  url:string="http://localhost:8080/"

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

}