import { Component, Input } from '@angular/core';
import { Multimedia } from '../../interfaces/multi.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input()
  public multis: Multimedia[] = []  

}
