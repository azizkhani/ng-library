/*
*
*    @ AH.GHORAB/H.RASOULI
*
*/
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {GenericService} from '../../../shared/genericService';
import {OrganizationStructureModel} from './organizationStructure.model';

@Injectable({
    providedIn: 'root'
})
export class OrganizationStructureService extends GenericService<OrganizationStructureModel> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/power/basePower');
    }

    /**
     * TODO: az any to string taghir konad
     */
    getAll(id: number, isRequestSearch: boolean): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/all/` + id + `/` + isRequestSearch);
    }

    /**
     * TODO: az any be OrganizationStructureModel taghir konad
     */
    load(id: number): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/load/` + id);
    }

}









