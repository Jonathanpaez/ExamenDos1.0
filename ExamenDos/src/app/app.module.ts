import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentePadreEquipoComponent } from './componente-padre-equipo/componente-padre-equipo.component';
import { ModeloPapaEquipoComponent } from './modelo-papa-equipo/modelo-papa-equipo.component';
import { ComponenteHijoJugadorComponent } from './componente-hijo-jugador/componente-hijo-jugador.component';
import { ComponentePerfilesComponent } from './componente-perfiles/componente-perfiles.component';
import { ModeloEquipoYJugadoresComponent } from './modelo-equipo-yjugadores/modelo-equipo-yjugadores.component';
import { HomeComponent } from './home/home.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';
import { TerceraPantallaComponent } from './tercera-pantalla/tercera-pantalla.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import {RUTAS_APP} from "./app.rutas";

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreEquipoComponent,
    ModeloPapaEquipoComponent,
    ComponenteHijoJugadorComponent,
    ComponentePerfilesComponent,
    ModeloEquipoYJugadoresComponent,
    HomeComponent,
    SegundaPantallaComponent,
    TerceraPantallaComponent,
    CarritoComprasComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
