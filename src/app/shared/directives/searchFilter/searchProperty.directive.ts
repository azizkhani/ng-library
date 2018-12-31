/**
 *
 * @ H.RASOULI/A.GHORAB
 *
 */
import {Directive, ElementRef, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[bhSearchProperty]',
})
export class BhSearchPropertyDirective implements OnChanges /*extends GenericDirective*/ {

    @Input() bhSearchProperty: string;
    @Input() bhSearchPattern = '7';
    /*
    * # 3 types of inputs
    * 1--> NO Input Or r(regular): Regular Search
    * 2--> p: Pattern for Search properties
    * 3--> as: Advance Search Properties
    */
    @Input() bhSearchType = 'r';

    searchPropertyValue = '';

    constructor(protected el: ElementRef) {
    }

    @HostListener('paste', ['$event'])
    @HostListener('select')
    @HostListener('input')
    ngOnChanges() {
        switch (this.bhSearchType) {
            case 'p': {
                this.bhSearchPattern = String(this.el.nativeElement.value);
                break;
            }
            case 'as': {
                this.searchPropertyValue = String(this.el.nativeElement.value);
                break;
            }
            default: {
                this.searchPropertyValue = String(this.el.nativeElement.value);
                break;
            }
        }
    }

    resetToDefault() {
        switch (this.el.nativeElement.type) {
            case 'text':
            case 'password':
            case 'email': {
                this.el.nativeElement.value = '';
                break;
            }
            case 'select':
            case 'select-one': {
                this.el.nativeElement.value = -1;
                break;
            }
            case 'radio':
            case 'checkbox': {
                this.el.nativeElement.checked = false;
                break;
            }
            default: {
                break;
            }
        }
    }
}

