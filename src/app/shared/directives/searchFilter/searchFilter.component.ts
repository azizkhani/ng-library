/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {ElementRef, Host} from '@angular/core';

import {SearchType} from './searchType.enum';
import {BhSearchFilterDirective} from './searchFilter.directive';

/**
 * @ Unused ======================
 * TODO: kar in component Chiye?
 */
export abstract class SearchFilterComponent {

    protected searchProperty: string;
    protected searchPattern: string;
    protected searchType: string;

    protected constructor(el: ElementRef,
                          @Host() public bhSearchFilter: BhSearchFilterDirective) {
        this.bhSearchFilter = bhSearchFilter;
        if (el.nativeElement.getAttribute('bhSearchProperty')) {
            this.searchProperty = el.nativeElement.getAttribute('bhSearchProperty');
        }

        if (el.nativeElement.getAttribute('bhSearchPattern')) {
            this.searchPattern = el.nativeElement.getAttribute('bhSearchPattern');
        }

        if (el.nativeElement.getAttribute('bhSearchType')) {
            this.searchType = el.nativeElement.getAttribute('bhSearchType');
        }
    }

    castToSearchTypeEnum(searchTypeString): SearchType {
        switch (searchTypeString) {
            case 'p': {
                return SearchType.Pattern;
            }
            case 'as': {
                return SearchType.AdvanceSearch;
            }
            default: {
                return SearchType.RegularSearch;
            }
        }
    }

    trigger(searchFilterValue: string) {

    }

    resetToDefault() {
    }
}









