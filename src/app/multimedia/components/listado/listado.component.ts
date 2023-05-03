import { Component, Input } from '@angular/core';
import { Multimedia } from '../../interfaces/multi.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  //036. SE RECEPCIONA EL OBJETO multi Y SE LE LLAMA multis PARA SU USO POR MEDIO DE Input()
  @Input()
  public multis: Multimedia[] = []  

}
