import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-hijo-jugador',
  templateUrl: './componente-hijo-jugador.component.html',
  styleUrls: ['./componente-hijo-jugador.component.css']
})
export class ComponenteHijoJugadorComponent implements OnInit {
  Numero='';
  Nombre='';
  NombreJ='';
  Fecha='';
  Goles='';
  Equipo='';
  constructor() { }

  ngOnInit() {
  }

}
