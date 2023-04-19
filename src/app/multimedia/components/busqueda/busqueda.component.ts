 import { Component, ElementRef, ViewChild } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';

 @Component({
    selector: 'multimedia-busqueda',
    template: '<div class="col"><h5>Buscar:</h5><input type="text" class="form-control" placeholder="Buscar..." (keyup.enter)="buscar()"#inputbuscar></div>'
 })

 export class BusquedaComponent {

  @ViewChild('inputbuscar')
  public tagInput!: ElementRef<HTMLInputElement>
  

 buscar(){
  const nuevotag = this.tagInput.nativeElement.value;
  this.multimediaservice.buscarTag(nuevotag)
  console.log(nuevotag)
  this.tagInput.nativeElement.value=''

 }

 constructor(private multimediaservice:MultimediaService){}
 }
