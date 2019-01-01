/*
*
*    @ AH.GHORAB / H.RASOULI
*
*/
import { Component, ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { Account } from '../../shared/account/account.model';
import { JhiEventManager } from 'ng-jhipster';
import { Principal } from '../../shared/auth';
import { APP_NAME } from '../../app.constants';

declare var $: any;

@Component({
    selector: 'sa-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
    headerSearch: any;
    count: number;
    lastUpdate: any;
    active: boolean;
    loading: boolean;
    currentAccount: Account = new Account();
    appName = APP_NAME;

    constructor(private el: ElementRef,
        private eventManager: JhiEventManager,
        private renderer: Renderer,
        private principal: Principal) {
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.active = true;
        this.loading = false;
        this.count = 0;
        this.lastUpdate = new Date();
    }

    ngOnInit() {

    }

    onToggle() {
        let dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
            this.renderer.listenGlobal('document', 'mouseup', (event) => {
                if (!this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    this.active = false;
                    this.documentUnsub();
                }
            });
        } else {
            dropdown.fadeOut();
            this.documentUnsub();
        }
    }

    ngOnDestroy() {
        this.documentUnsub();
    }

    documentUnsub() {
    }

    update() {
        this.loading = true;
        setTimeout(() => {
            this.lastUpdate = new Date();
            this.loading = false;
        }, 1000);
    }


    searchInputChange($event) {
        this.eventManager.broadcast({
            name: 'header-search-event',
            content: {
                phrase: $event
            }
        });
    }
}
