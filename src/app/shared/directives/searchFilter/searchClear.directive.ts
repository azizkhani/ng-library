import {Directive, Host, HostListener} from '@angular/core';
import {BhSearchFilterDirective} from './searchFilter.directive';

@Directive({
    selector: '[bhClearSearch]'
})
export class BhSearchClearDirective {

    constructor(@Host() public bhSearchFilter: BhSearchFilterDirective) {
    }

    @HostListener('click') onClick() {
        this.bhSearchFilter.clearSearch();
    }

}
