import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MultimediaModule } from './multimedia/multimedia.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  //EL MODULO PRINCIPAL IMPORTA TODOS LOS MODULOS "HIJOS" JUNTO A LOS PROPIOS QUE IMPORTEN FUNCIONES DE 3EROS
  imports: [
    SharedModule,
    BrowserModule,
    MultimediaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
