/*
 *
 *    @ AH.GHORAB / H.RASOULI
 *
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {JhiEventManager} from 'ng-jhipster';

import {Principal} from '../../shared/auth';
import {NavigationMenuItem} from './navigation.model';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'bh-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, OnDestroy {

    public currentAccount: any;
    // for collecting navigation menu item as new node
    public actionMenu: NavigationMenuItem[] = [];
    public searchActionMenu: NavigationMenuItem[] = [];
    public rootSearchActionMenu = new NavigationMenuItem();
    public originalMenu: NavigationMenuItem;
    public navigationMenuItem: NavigationMenuItem;

    // Define this for disable and enabling HOME button during search menu
    public searchStringLength = 0;

    constructor(private principal: Principal,
                private navigationServeice: NavigationService,
                private eventManager: JhiEventManager) {

        this.navigationServeice.get().then(
            navdata => {
                this.navigationMenuItem = navdata;
                this.originalMenu = navdata;
                this.foundMenuLastNodes(this.navigationMenuItem.childs);
            }
        );

        this.principal.identity().then(account => {
            this.currentAccount = account;
        });

        console.log(' constructor NavigationComponent');

    }

    ngOnDestroy() {
        console.log(' ngOnDestroy NavigationComponent');
    }

    ngOnInit() {
        console.log(' ngOnInit NavigationComponent');
        this.eventManager.subscribe('header-search-event', (response) => {
            this.searchStringLength = response.content.phrase.length;
            this.searchActionMenu.splice(0, this.searchActionMenu.length);
            this.rootSearchActionMenu.childs.splice(0, this.rootSearchActionMenu.childs.length);
            this.actionMenu.forEach(actionMenu => {
                if (actionMenu.topic.indexOf(response.content.phrase) !== -1) {
                    this.searchActionMenu.push(actionMenu);
                    this.rootSearchActionMenu.childs.push(actionMenu);
                    this.rootSearchActionMenu.existsChild = true;
                }
            });
        });
    }

    foundMenuLastNodes(navigationMenuItemList: NavigationMenuItem[]) {
        navigationMenuItemList.forEach(child => {
            if (child.childs.length) {
                this.foundMenuLastNodes(child.childs);
            } else {
                this.actionMenu.push(child);
            }
        });
    }
}
