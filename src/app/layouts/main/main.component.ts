/**
 *
 *    @ H.RASOULI / AH.GHORAB
 *
 */
import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationMenuItem} from '../navigation';
import {JhiEventManager} from 'ng-jhipster';
import {Subscription} from 'rxjs';
import {IframeComponent} from '../../shared/components/iframe';

@Component({
    selector: 'bh-main-layout',
    templateUrl: './main.component.html'
})
export class BhMainComponent implements OnInit, OnDestroy {

    @ViewChild('iframeContent', {read: ViewContainerRef}) private iframeContent: ViewContainerRef;
    isIframeActive = false;
    navigationMenuListener: Subscription;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private router: Router,
                private eventManager: JhiEventManager) {
        this.navigationMenuListener = this.eventManager.subscribe('activeNavigationMenu', (response) => {
            this.handleRouteClick(response.content.menuItem);
        });
    }

    ngOnInit() {
    }

    handleRouteClick(navigationMenuArray: NavigationMenuItem) {
        this.isIframeActive = false;
        if (this.iframeContent.length > 0) {
            this.iframeContent.remove(0);
        }

        if (!navigationMenuArray.attrMap.path) {
            this.isIframeActive = true;
            let factory = this.componentFactoryResolver.resolveComponentFactory(IframeComponent);
            let componentRef = this.iframeContent.createComponent(factory);
            componentRef.instance.ifSrc = navigationMenuArray.attrMap.url;
            componentRef.instance.secureRes();
            componentRef.instance.id = navigationMenuArray.id;
            componentRef.instance.topic = navigationMenuArray.topic;
            navigationMenuArray.componentRef = componentRef;
            this.router.navigate(['view/' + this.getIframePageName(navigationMenuArray.attrMap.url)])
        } else {
            this.router.navigate([navigationMenuArray.attrMap.path]);
        }
    }

    getIframePageName(iframeSRC: string): string {
        if (iframeSRC.split('/')[iframeSRC.split('/').length - 1] !== 'Index.jsp') {
            return (iframeSRC.split('/')[iframeSRC.split('/').length - 1]).split('.')[0];
        } else {
            return iframeSRC.split('/')[(iframeSRC.split('/').length) - 2];
        }
    }

    ngOnDestroy(): void {
        if (this.navigationMenuListener !== undefined && this.navigationMenuListener !== null) {
            this.eventManager.destroy(this.navigationMenuListener);
        }
    }
}
