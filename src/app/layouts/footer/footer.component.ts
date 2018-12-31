/*
*
* @ AH.GHORAB/ H.RASOULI
*
*/
import {Component} from '@angular/core';
import {JhiEventManager} from 'ng-jhipster';

/*
let appProperties = require('appProperties');
*/

@Component({
    selector: 'sa-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    public userLastLoginDate: string;
    public version: string;
    public applicationName: string;
    public updateDate: string;

    constructor(private eventManager: JhiEventManager) {

        /*        this.version = appProperties.version;
                this.updateDate = appProperties.date;
                this.applicationName = appProperties.applicationName;*/
        this.version = '';
        this.updateDate = '';
        this.applicationName = '';

        this.eventManager.subscribe('userLastLogin', (response) => {
            this.userLastLoginDate = response.content.userLastLogin;
        });
    }

}
