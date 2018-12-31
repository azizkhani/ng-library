/*
*
*    @ AH.GHORAB
*
*/
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Group} from './group.model';
import {BaseInformation} from '../../baseInformation';
import {GenericService} from '../../../shared/genericService';

type EntityResponseTypeArray = HttpResponse<BaseInformation[]>;

@Injectable({
    providedIn: 'root'
})
export class GroupService extends GenericService<Group> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/security/group');
    }

    update(entity: Group): Observable<any> {
        const copy: Group = Object.assign({}, entity);
        return this.http.post(`${this.resourceUrl}/saveGroupActionSystem`, copy);
    }

    /**
     * TODO: az any be BaseInformation[] taghir konad
     */
    getUserSystems(): Observable<EntityResponseTypeArray> {
        return this.http.get<BaseInformation[]>(`${this.resourceUrl}/getUserSystems`, {observe: 'response'});
    }

    getActionList(id: number): Observable<any> {
        return this.http.get<any>(`rest/core/security/action/getGroupActions/${id}`);
    }

}









