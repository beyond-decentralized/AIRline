import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tsk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tasks';

  constructor(
    ngZone: NgZone,
    router: Router
  ) {
    let global = (globalThis as any)
    global.setApiClientNgZone(ngZone)
    global.setApiClientNavigationCallback((url: string) => {
      router.navigateByUrl(url)
    })
  }

}
