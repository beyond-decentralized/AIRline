import { loadUiAutopilot } from '@airport/autopilot';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

loadUiAutopilot()

platformBrowserDynamic().bootstrapModule(AppModule
//   , {
//   ngZone: 'noop'
// }
)
  .catch(err => console.error(err));
