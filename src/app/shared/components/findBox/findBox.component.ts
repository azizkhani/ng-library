import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var openWindow: any;
declare var modalCount: any;
declare var $: any;

@Component({
    selector: 'bh-findBox',
    template: `
    <div class="input-group">
        <input class="form-control" ng-  readonly type="text" [id]="windowId" [value]="bindVal" [required]="required"
               style="font-size: 9px; "/>
        <div class="input-group-btn">
             <button type="button" class="btn btn-primary" tabindex="-1" (click)="openModal()"> ... </button>
        </div>
    </div>
    `
})
/**
 * @deprecated since 1397/08/26- version ng-baharan 1.6.4.
 */
export class FindBoxComponent implements OnInit {
    @Input() windowId: string;
    @Input() windowTitle: string;
    @Input() url: string;
    @Input() width: string;
    @Input() height: string;
    @Input() isMaximize: string;
    @Input() isModal: string;
    @Input() menuLayoutState: string;
    @Input() bindVal: any;
    @Input() required: any;
    // parm: param1:value&param2=valu2 :
    @Input() params: any;

    @Output() modalRes: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    sendev($event): void {
        this.modalRes.emit($event);
        $('#ModalPage' + modalCount).modal('hide');
    }

    ngOnInit() {
        (<any>window)['sendev' + this.windowId] = this.sendev.bind(this);
    }

    openModal() {
        openWindow(this.windowId, this.windowTitle, this.url + '?func=sendev' + this.windowId + '&' + this.params, this.width, this.height,
            this.isMaximize, this.isModal, this.menuLayoutState, 'sendev');
    }
}
