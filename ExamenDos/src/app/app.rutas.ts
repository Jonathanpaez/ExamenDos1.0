import {Routes} from "@angular/router";
import {PrincipalComponent} from "./principal/principal.component";
import {SegundaPantallaComponent} from "./segunda-pantalla/segunda-pantalla.component";
import {TerceraPantallaComponent} from "./tercera-pantalla/tercera-pantalla.component";
import {CarritoComprasComponent} from "./carrito-compras/carrito-compras.component";


export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: PrincipalComponent,
  },
  {
    path: 'equipo',
    component: SegundaPantallaComponent,
  },

  {
    path: 'jugador',
    component: TerceraPantallaComponent
  },
  {
    path: 'compras',
    component: CarritoComprasComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
