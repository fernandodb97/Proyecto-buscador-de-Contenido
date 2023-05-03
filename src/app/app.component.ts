import { Component } from '@angular/core';

@Component({

  //004. SE ESTABLECEN selector:(PARA LLAMARLO), templateUrl:(PARA VISUALIZARLO) Y styleUrls:(PARA DARLE ESTILO A LA VISTA) 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista';
}
