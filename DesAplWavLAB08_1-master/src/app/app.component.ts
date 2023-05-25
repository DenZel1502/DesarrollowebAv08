import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sitio = 'https://open.spotify.com/';
  title = 'Hola Mundo - Angular'
  nombre = 'Denzel Jesús Zuñiga Noriega';
  edad = 21;
  email = 'denzel.zuniga@tecsup.edu.pe';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo(){
    if (this.activo)
      return 'Trabajador Activo';
    else 
      return 'Trabajador Inactivo';
  }
  ultimos3Sueldos(){
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
  contador = 1;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

  profesion="";
  anios="";
}
