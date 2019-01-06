import { Component, OnInit } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { NavigationMenuItem } from '../navigation';
import { BHConfigService } from '../../config.service';

@Component({
    selector: 'sa-route-breadcrumbs',
    template: `
        <ol class='breadcrumb'>
           <li >{{appname}}</li>
           <li >{{activeNavigationMenuItem.topic}}</li>
        </ol>
  `,
    styles: []
})
export class RouteBreadcrumbsComponent implements OnInit {

    public items: Array<string> = [];
    public activeNavigationMenuItem = new NavigationMenuItem;
    public appname;

    constructor(
        private eventManager: JhiEventManager,
        private configService: BHConfigService) {
        this.appname = configService.getConfig().APP_NAME;
    }

    ngOnInit() {

        /*this.router.events
            .filter(e => e instanceof NavigationEnd)
            .subscribe(v => {
                this.items = [];
                this.extract(this.router.routerState.root);
            });*/

        this.eventManager.subscribe('activeNavigationMenu', (response) => {
            this.activeNavigationMenuItem = response.content.menuItem;
        });

    }

    extract(route) {
        const pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) === -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(it => {
                this.extract(it);
            });
        }
    }


}
