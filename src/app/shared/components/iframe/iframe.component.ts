/**
 *    @ AH.GHORAB/H.RASOULI
 */
import {ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {JhiEventManager} from 'ng-jhipster';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'bh-iframe',
    template: `
        <iframe [id]="'windowIframe+'+id" #iframe [src]="secureUrl" [hidden]="makeIframeHidden"
        width="100%" height="700px" style="border: 0 solid gray"></iframe>`
})
export class IframeComponent implements OnInit {


    public id: number;
    public topic: string;
    public makeIframeHidden: boolean;
    public ifSrc = '';
    public angularModalEvenetName = 'angularModalEvenetName';
    public secureUrl: any;
    @ViewChild('iframe') iframe: ElementRef;

    constructor(public domSanitizer: DomSanitizer,
                private router: Router,
                private zone: NgZone,
                private changeDetectorRef: ChangeDetectorRef,
                private eventManager: JhiEventManager) {
    }

    ngOnInit(): void {
        /**
         * @type {any}
         */
        (<any>window).openAngularModal = this.openAngularModal.bind(this);
    }

    secureRes() {
        this.secureUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.ifSrc);
    }

    /**
     *
     * @param url : jsp url
     * @param evenetName : event name used in angular modal
     * @param callbackFunctionName : function in jsp
     */
    openAngularModal(url: string, evenetName, callbackFunctionName) {
        this.zone.run(() => {
            let params: { [key: string]: any } = {};
            let urlQueryParams: string = url.split('?')[1];
            urlQueryParams.split('&').forEach(p => {
                params[p.split('=')[0]] = p.split('=')[1];
            });
            this.router.navigate(['/', {outlets: {popup: url}}], {
                queryParams: params,
                replaceUrl: true,
                queryParamsHandling: 'merge'
            });
            this.angularModalEvenetName = evenetName;
            this.changeDetectorRef.detectChanges();
            if (evenetName) {
                this.eventManager.subscribe(this.angularModalEvenetName, (response) => {
                    if (response.content.data) {
                        this.iframe.nativeElement.contentWindow[callbackFunctionName](response.content.data);
                    }
                });
            }
        })
    }
}
