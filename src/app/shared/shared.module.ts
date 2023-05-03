import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MultimediaService } from '../multimedia/services/multimedia.service';
import { MultimediaModule } from '../multimedia/multimedia.module';



@NgModule({

  //M4. SE DECLARA EL COMPONENTE PRINCIPAL
  declarations: [
    SidebarComponent
  ],

  //M5. EL COMPONENTE PRINCIPAL IMPORTA TODOS LOS MODULOSDE 3EROS JUNTO A LOS PROPIOS
  imports: [
    CommonModule,
    MultimediaModule
  ],

  //M6. AQUI VA EL MODULO A EXPORTARSE PARA UTILIZAR EN FUTUROS MODULOS QUE LO IMPORTEN
  exports:[
    SidebarComponent
  ],

  //M7. AQUI VAN LOS SERVICIOS A INJECTAR EN LOS DEMÁS MODULOS
  providers:[
    MultimediaService
  ]
})
export class SharedModule { }
