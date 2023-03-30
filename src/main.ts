import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'zone.js';  // Included with Angular CLI.


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /* Este es el archivo principal de la aplicación, en el cual se importan todos los módulos y componentes que se van a utilizar en la aplicación. */