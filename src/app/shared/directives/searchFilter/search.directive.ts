import {Directive, Host, HostListener} from '@angular/core';
import {BhSearchFilterDirective} from './searchFilter.directive';

@Directive({
    selector: '[bhSearch]'
})
export class BhSearchDirective {

    constructor(@Host() public bhSearchFilter: BhSearchFilterDirective) {
    }

    @HostListener('click') onClick() {
        this.bhSearchFilter.createSearchFilter();
    }

}
