import {Component} from '@angular/core';

@Component({
    selector: 'bh-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor() {
        (<any>window).refreshPersonalEvents = this.refreshPersonalEvents.bind(this);
    }


    logout() {
    }

    refreshPersonalEvents(...data) {
    }
}
