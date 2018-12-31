/**
 *
 *    @ AH.GHORAB/ H.RASOULI
 *
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Personel} from './personel.model';
import {GenericService} from '../../../shared/genericService';
import {HttpClient} from '@angular/common/http';
import {QueryParam, QueryResult} from '../../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class PersonelService extends GenericService<Personel> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/basePersonel');
    }

    get(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list/grid`, {params: queryParam.toHttpPrams()});
    }

    /**
     * TODO: az Any be Person taghir konad
     */
    load(id: number): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/load/${id}`);
    }
}
