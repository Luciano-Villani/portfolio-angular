import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { navbarInterface } from 'src/assets/data/navbarInterface';

@Component({
  selector: 'app-nav-bar-form',
  templateUrl: './nav-bar-form.component.html',
  styleUrls: ['./nav-bar-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarFormComponent implements OnInit {
  misRedesBO:navbarInterface[] = [];

  constructor(private datosRedes:NavBarService) { }

  ngOnInit(): void {
    this.datosRedes.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misRedesBO=data;
    });
  }

}
