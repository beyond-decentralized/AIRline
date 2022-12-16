import { loadAutopilot } from '@airport/autopilot';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

loadAutopilot()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
