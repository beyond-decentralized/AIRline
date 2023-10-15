import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'cvr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'conversations';

  constructor(
    ngZone: NgZone
  ) {
    (globalThis as any).setApiClientNgZone(ngZone)
  }

}
