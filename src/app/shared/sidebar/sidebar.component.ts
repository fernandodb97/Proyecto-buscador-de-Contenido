import { Component } from '@angular/core';
import { MultimediaService } from '../../multimedia/services/multimedia.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get tags(){
    return this.multimediaservice.taghistorial;
  }

  buscartag(tag:string){
    this.multimediaservice.buscarTag(tag);
  }


  constructor(private multimediaservice:MultimediaService){}

}
