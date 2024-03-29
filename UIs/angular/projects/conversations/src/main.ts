import { loadUiAutopilot } from '@airport/autopilot';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

loadUiAutopilot()

platformBrowserDynamic().bootstrapModule(AppModule
//   , {
//   ngZone: 'noop'
// }
)
  .catch(err => console.error(err));
