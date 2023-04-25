import { Component } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { Multimedia } from '../../interfaces/multi.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private multimediaservice:MultimediaService){
  }

  get multis() : Multimedia[] {
    return this.multimediaservice.multiList;
  }
}
