/*
*
*    @ AH.GHORAB
*
*/
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {JhiPaginationUtil} from 'ng-jhipster';

@Injectable({
    providedIn: 'root'
})
export class PaginationRouteResolver implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '0';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : route.data['defaultOrdering'];
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }

}
