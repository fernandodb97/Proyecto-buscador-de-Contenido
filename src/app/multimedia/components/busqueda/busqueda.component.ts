 import { Component, ElementRef, ViewChild } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';

 @Component({
    selector: 'multimedia-busqueda',
    template: `<div class="col">
                  <h5>Buscar:</h5>
                  <!--030. SE LLAMA A LA FUNCION buscar() CON EVENTBINDING (keyup.enter) Y REFERERENCIA LOCAL #-->
                  <input type="text" class="form-control" placeholder="Buscar..." (keyup.enter)="buscar()"#inputbuscar>
               </div>`
 })

 export class BusquedaComponent {

  //031. ViewChild PARA DEFINIR TIPO INPUT REFERENCIADO COMO OBJETO ElementRef EN EL .TS 
  @ViewChild('inputbuscar')
  public tagInput!: ElementRef<HTMLInputElement>
  
 //032. FUNCION QUE ADQUIERE VALOR INGRESADO EN INPUT Y REDIRECCIONA A LA FUNCION buscarTag() DEL SERVICIO CON ESE VALOR  
 buscar(){
  const nuevotag = this.tagInput.nativeElement.value;
  this.multimediaservice.buscarTag(nuevotag)
  console.log(nuevotag)

  //034. FINALMENTE DEJA VALOR DE INPUT COMO VACIO PARA NUEVOS INGRESOS
  this.tagInput.nativeElement.value=''

 }

 constructor(private multimediaservice:MultimediaService){}
 }
