/**
 *
 * @ H.RASOULI/A.GHORAB
 *
 */
import {ContentChildren, Directive, EventEmitter, Output} from '@angular/core';

import {BhSearchPropertyDirective} from './searchProperty.directive';

@Directive({
    selector: '[bhSearchFilter]'
})
export class BhSearchFilterDirective {

    @Output() callback: EventEmitter<any> = new EventEmitter<any>();

    private finalParamMap = new Map<string, any>();

    @ContentChildren(BhSearchPropertyDirective) bhSearchProperties: BhSearchPropertyDirective[];

    clearSearch() {
        this.finalParamMap.clear();
        this.bhSearchProperties.forEach(element => {
            element.resetToDefault();
        });
        this.finalParamMap.clear();
        this.callback.emit({
            paramMap: this.finalParamMap
        });
    }

    createSearchFilter() {
        let searchFilter = '$$,$$';
        let searchProperties = new Array<BhSearchPropertyDirective>();
        this.finalParamMap.clear();
        this.bhSearchProperties.forEach((searchProperty) => {
            let foundedProperty = searchProperties.find((pp) => {
                return pp.bhSearchProperty === searchProperty.bhSearchProperty
            });
            if (foundedProperty) {
                if (foundedProperty.bhSearchType === 'p') {
                    foundedProperty.searchPropertyValue = searchProperty.searchPropertyValue;
                } else {
                    foundedProperty.bhSearchPattern = searchProperty.bhSearchPattern;
                }
            } else {
                searchProperties.push(searchProperty);
            }
        });

        searchProperties.filter((p) => {
            return (p.searchPropertyValue !== '-1' && p.searchPropertyValue.trim() !== '');
        }).forEach((item) => {
            if (item.bhSearchType === 'r') {
                this.finalParamMap.set(item.bhSearchProperty, item.searchPropertyValue);
            } else {
                let pattern: string =  item.bhSearchProperty + '$$' + item.searchPropertyValue + '$$' + item.bhSearchPattern + '$$,$$';
                searchFilter += pattern;
            }
        });

        if (searchFilter.trim().length > 0) {
            this.finalParamMap.set('searchFilter', searchFilter);
        }
        this.callback.emit({
            paramMap: this.finalParamMap
        });
    }
}
