import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skillsInterface } from 'src/assets/data/skillsInterface';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {
  url:string="http://localhost:8080/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"ver/softskills")
}
public softskills: skillsInterface | boolean = false;
 
    public getSoftSkills(): skillsInterface    | boolean {
        return this.softskills;
    }
 
    public setSoftSkills(softskills: skillsInterface): void {
        this.softskills = softskills;
    }
    agregarSoftSkill(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/softskill", body);
  }
  borrarSoftSkill(id: number):Observable<any> { 
    return this.http.delete(this.url + "softskill/delete/" + id);
}

}


