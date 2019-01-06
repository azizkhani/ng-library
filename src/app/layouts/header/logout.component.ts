/*
*
*    @ AH.GHORAB/ H.RASOULI
*
*/
import { Component } from '@angular/core';
import { LoginService } from '../../shared/auth';


@Component({
    selector: 'sa-logout',
    template: `
        <div id="logout" (click)="logout()" class="transparent" style="padding-right: 19px;">
        <span>
            <a title="خروج">
                <i class="fa fa-power-off" style="float: right; padding-left: 9px;"></i>
                خروج
            </a>
        </span>
        </div>
    `,

    styles: []
})
export class LogoutComponent {

    constructor(private loginService: LoginService) {
    }

    logout() {
        this.loginService.logout();
    }
}
