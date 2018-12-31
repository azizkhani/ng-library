/**
 *
 *  @ H.RASOULI
 *
 */

import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {FillComboDirectiveService} from './fillCombo-directive.service';


@Directive({
    selector: '[bhFillCombo]'
})
export class FillComboDirective implements OnInit {

    @Input() bhFillCombo: string;
    @Input() itemKey: string;
    @Input() itemTitle: string;
    @Input() type: string;

    constructor(public el: ElementRef,
                public fillComboDirectiveService: FillComboDirectiveService) {
    }

    ngOnInit() {
        this.fillComboDirectiveService.loadList(this.bhFillCombo).subscribe((loadList) => {
            for (let listItem of loadList) {
                this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML + '<option value=\'' + listItem[this.itemKey] + '\'>&emsp;' + listItem[this.itemTitle] + '</option>';
            }
        });
    }
}
