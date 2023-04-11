import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  
  //MODULOS HIJOS A IMPORTAR PARA SER USADOS EN LOS exports:[] POR EL MODULO PADRE
  declarations: [
    SidebarComponent
  ],

  //MODULOS IMPORTADOS CON FUNCIONES DE ANGULAR IMPORTANTES PARA SU USO
  imports: [
    CommonModule
  ],

  //AQUI VA EL MODULO PADRE DONDE SE VAN A UTILIZAR LOS MODULOS HIJOS declarations:[]
  exports:[
    SidebarComponent
  ],

  //AQUI VAN LOS SERVICIOS A INJECTAR EN LOS DEMÁS MODULOS
  providers:[
    
  ]
})
export class SharedModule { }
