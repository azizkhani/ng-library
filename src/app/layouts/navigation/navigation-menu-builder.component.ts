/*
 *
 *    @ AH.GHORAB
 *
 */
import { Component, Input } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { NavigationService } from './navigation.service';
import { NavigationMenuItem } from './navigation.model';

@Component({

    selector: 'bh-navigation-menu-builder',
    template: `
        <li routerLinkActive="" *ngFor="let navItem of subNavigationMenuItem?.childs">
            <a (click)="navItemClick(navItem)"><i class="fa fa-caret-left"></i>
                {{navItem?.topic}}
            </a>
            <ul *ngIf="navItem?.childs.length">
                <bh-navigation-menu-builder [subNavigationMenuItem]="navItem"></bh-navigation-menu-builder>
            </ul>
        </li>
    `
})
export class NavigationMenuBuilderComponent {
    @Input() subNavigationMenuItem: NavigationMenuItem;

    navMenuArray: Array<NavigationMenuItem> = new Array<NavigationMenuItem>();

    constructor(private eventManager: JhiEventManager,
        private navigationService: NavigationService) {
        this.navigationService.navMenuArray.subscribe(navMenuArray => {
            this.navMenuArray = navMenuArray;
        });
    }

    navItemClick(navigationMenuItem: NavigationMenuItem) {
        navigationMenuItem.isShowing = true;
        if (navigationMenuItem.childs === null || navigationMenuItem.childs.length === 0) {
            this.eventManager.broadcast({
                name: 'activeNavigationMenu',
                content: {
                    menuItem: navigationMenuItem
                }
            });
        }
    }
}
