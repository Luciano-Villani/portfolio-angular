import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/servicios/nav-bar.service';
import { navbarInterface } from 'src/assets/data/navbarInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  misRedes: navbarInterface[] = [];

  constructor(private datosPorfoio:NavBarService) { }

  ngOnInit(): void {
    this.datosPorfoio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misRedes=data;

    });
  
  }

}
