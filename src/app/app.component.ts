/**
 * @ H.RASOULI
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <router-outlet></router-outlet>
        <router-outlet name='popup'></router-outlet>
    `
})
export class AppComponent {

}
