/**
 *
 *  @ H.RASOULI
 *
 */

import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {EnumHandlerDirectiveService} from './enumHandler-directive.service';


@Directive({
    selector: '[bhEnumHandler]'
})
export class EnumHandlerDirective implements OnInit {

    @Input() enumHandler: string;

    constructor(public el: ElementRef,
                public enumHandlerDirectiveService: EnumHandlerDirectiveService) {
    }

    ngOnInit() {
        this.enumHandlerDirectiveService.loadList(this.enumHandler).subscribe((loadList) => {
            for (let listItem of loadList) {
                this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML + '<option value=\'' + listItem['index'] + '\'>&emsp;' + listItem['persianTitle'] + '</option>';
            }
        });
    }
}
