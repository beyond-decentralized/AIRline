import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cvr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'conversations';

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
