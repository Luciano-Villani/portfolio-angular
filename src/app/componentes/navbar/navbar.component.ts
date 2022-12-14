import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datosPorfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  misRedes:any;

  constructor(private datosPorfoio:DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfoio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.misRedes=data.RedesSociales;

    });
  
  }

}
