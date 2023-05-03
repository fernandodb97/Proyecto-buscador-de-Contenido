import { Component } from '@angular/core';
import { MultimediaService } from '../../multimedia/services/multimedia.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //009. SE OCUPA FUNCION get EXTERNA PARA LLAMAR taghistorial DEL SERVICIO  
  get tags(){
    return this.multimediaservice.taghistorial;
  }

  //014. SE OCUPA FUNCION INTERNA PARA LLAMAR A FUNCION buscarTag() DEL SERVICIO CON VARIABLE DEL COMPONENTE   
  buscartag(tag:string){
    this.multimediaservice.buscarTag(tag);
  }

  //007. SE UTILIZA UN CONSTRUCTOR PARA LLAMAR FUNCIONES INTERNAS DEL SERVICIO
  constructor(private multimediaservice:MultimediaService){}

}
