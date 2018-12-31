/*
 *
 *    @ AH.GHORAB /EDITED: H.RASOULI
 *
 */
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserHistoryService} from '../../shared/auth';
import {UserHistory} from '../../management/security/user/model';
import {JhiEventManager} from 'ng-jhipster';


@Component({
    selector: 'bh-login-info-widget',
    templateUrl: './loginInfo.component.html'
})
export class LoginInfoComponent implements OnInit, AfterViewInit {
    public userHistory: UserHistory;

    constructor(private userHistoryService: UserHistoryService,
                private eventManager: JhiEventManager) {
    }

    ngOnInit() {
        this.userHistoryService.getUserHistory().subscribe((userHistory) => {
            this.userHistory = userHistory;
            this.eventManager.broadcast(
                {
                    name: 'userLastLogin',
                    content: {
                        'userLastLogin': this.userHistory.loginSolarDate
                    }
                }
            );
        });
    }

    ngAfterViewInit() {
    }

    logout() {
    }
}
