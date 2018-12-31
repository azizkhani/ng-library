import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {BaseInformationDirectiveService} from './baseInformation-directive.service';

@Directive({
    selector: '[baseInformation]',
    exportAs: 'baseInfo'
})
export class BaseInformationDirective implements OnInit {
    @Input() baseInformation: string;
    baseInformationList: any[];

    constructor(public el: ElementRef,
                public baseInformationDirectiveService: BaseInformationDirectiveService) {
    }

    ngOnInit() {
        this.baseInformationDirectiveService.getBaseInformationByParentId(this.baseInformation).subscribe((baseInformationList) => {
            this.baseInformationList = baseInformationList;
        });
    }

    getList() {
        return this.baseInformationList;
    }
}
