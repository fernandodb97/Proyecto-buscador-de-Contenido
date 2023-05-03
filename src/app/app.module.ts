//MODULOS DE ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//MODULOS Y COMPONENTES PROPIOS
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MultimediaModule } from './multimedia/multimedia.module';


@NgModule({

  //M1. SE DECLARA EL COMPONENTE PRINCIPAL
  declarations: [
    AppComponent
  ],

  //M2. EL COMPONENTE PRINCIPAL IMPORTA TODOS LOS MODULOSDE 3EROS JUNTO A LOS PROPIOS
  imports: [
    SharedModule,
    MultimediaModule,

    BrowserModule,
    HttpClientModule
  ],
  providers: [],

  //M3. PARA HACER REFERENCIA A LOS ESTILOS EN PASO .001
  bootstrap: [AppComponent]
})
export class AppModule { }
