import {Subscription} from 'rxjs';
import {AfterContentInit, AfterViewInit, Component, ElementRef, OnDestroy, Renderer} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

import {LayoutService} from '../layout.service';


@Component({
    selector: 'sa-leftBar',
    templateUrl: './leftBar.component.html',
    animations: [
        trigger('leftBarState', [
            state('out', style({
                width: 0,
            })),
            state('in', style({
                width: '*',
            })),
            transition('out => in', animate('250ms ease-out')),
            transition('in => out', animate('300ms ease-in'))
        ])
    ]
})
export class LeftBarComponent implements AfterViewInit, AfterContentInit, OnDestroy {
    public state = 'out';
    private layoutSub: Subscription;
    documentSub: any;

    constructor(private layoutService: LayoutService,
                private router: Router,
                private renderer: Renderer,
                private el: ElementRef) {
    }

    shortcutTo(route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    }

    listen() {

        this.layoutSub = this.layoutService.subscribe((store) => {
            this.state = store.leftBarOpen ? 'in' : 'out';
            if (store.leftBarOpen) {
                this.documentSub = this.renderer.listenGlobal('document', 'mouseup', (event) => {
                    if (!this.el.nativeElement.contains(event.target)) {
                        this.layoutService.onLeftBarToggle(false);
                        this.documentUnsub();
                    }
                });
            } else {
                this.documentUnsub();
            }
        });
    }

    ngAfterContentInit() {
        this.listen();

    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        this.layoutSub.unsubscribe();
    }

    documentUnsub() {
        this.documentSub = null;
    }
}
