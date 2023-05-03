import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//003. HACE REFERENCIA AL MODULO DONDE SE ALOJA EL COMPONENTE LLAMADO
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
