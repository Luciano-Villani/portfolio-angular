import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { navbarInterface } from 'src/assets/data/navbarInterface';

@Injectable({
  providedIn: 'root'
  
})
export class NavBarService {
 
 
  
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<navbarInterface[]>{
    return this.http.get<any>(this.url+"ver/redes")

}
public redes: navbarInterface | boolean = false;
 
    public getTRedes(): navbarInterface    | boolean {
        return this.redes;
    }
 
    public setExperiencia(redes: navbarInterface): void {
        this.redes = redes;
    }
    agregarRed(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/red", body);
  }
  borrarRed(id: number):Observable<any> { 
    return this.http.delete(this.url + "redes/delete/" + id);
}
}
