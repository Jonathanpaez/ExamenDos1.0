import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre-equipo',
  templateUrl: './componente-padre-equipo.component.html',
  styleUrls: ['./componente-padre-equipo.component.css']
})
export class ComponentePadreEquipoComponent implements OnInit {
  Nombre='';
  Liga='';
  Fecha='';
  Copas='';
  Campeonato='';
  constructor() { }

  ngOnInit() {
  }

}
