import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListadoComponent } from './components/listado/listado.component';



@NgModule({
  declarations: [
    InicioComponent,
    BusquedaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent
  ]
})
export class MultimediaModule { }
