import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercera-pantalla',
  templateUrl: './tercera-pantalla.component.html',
  styleUrls: ['./tercera-pantalla.component.css']
})
export class TerceraPantallaComponent implements OnInit {
  imagenDisponible = "https://upload.wikimedia.org/wikipedia/commons/5/58/Disponible.png";
  imagenNoStock="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpKvHZIljbv_oB5Svi4_P6rBDmdU2qhpGxZOPza2IC4MyQ9ng";
  constructor() { }

  ngOnInit() {
  }
  disponible(){
    this.imagenDisponible=this.imagenNoStock;
  }

}
