import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skillsInterface } from 'src/assets/data/skillsInterface';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {
  url:string="https://luciano-villani-portfolio-backend.onrender.com/"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<skillsInterface>{
    return this.http.get<any>(this.url+"ver/hardskills")
}

public hardskills: skillsInterface | boolean = false;
 
    public getHardSkills(): skillsInterface    | boolean {
        return this.hardskills;
    }
 
    public setHardSkills(hardskills: skillsInterface): void {
        this.hardskills = hardskills;
    }
    agregarHardSkill(body: any):Observable<any> {
      return this.http.put(this.url+"actualizar/hardskill", body);
  }
  borrarHardSkill(id: number):Observable<any> { 
    return this.http.delete(this.url + "hardskill/delete/" + id);
}
}



