import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'bh-not-access-error',
    templateUrl: './not-access.component.html'
})
export class NotAccessComponent {

    constructor(private router: Router) {

    }

    goToIndex() {
        this.router.navigate(['/home']);
    }
}
