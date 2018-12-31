/*
*
*    @ AH.GHORAB
*
*/
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {OrganizationStructureService} from './organizationStructure.service';
import {OrganizationStructureModel} from './organizationStructure.model';

@Injectable({
    providedIn: 'root'
})
export class OrganizationStrictureRouteResolver implements Resolve<any> {

    constructor(private organizationStructureService: OrganizationStructureService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        if (route.params['id'] != undefined) {
            return this.organizationStructureService.load(route.params['id']);
        }
        return Observable.of(new OrganizationStructureModel());
    }
}
