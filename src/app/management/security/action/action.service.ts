/**
 * @ M.AMERY
 */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryParam, QueryResult } from '../../../shared/components/pagination';
import { Action } from './action.model';


type EntityResponseGridType = HttpResponse<QueryResult<Action>>;

@Injectable({
    providedIn: 'root'
})
export class ActionService {

    private resourceUrl;

    constructor(private http: HttpClient) {
        this.resourceUrl =  '/rest/core/security/action';
    }

    get(queryParam: QueryParam): Observable<EntityResponseGridType> {
        return this.http.get<QueryResult<Action>>(`${this.resourceUrl}/ng/list/grid`, {
            params: queryParam.toHttpPrams(),
            observe: 'response'
        });
    }

    setEnabled(actionId: number, isEnabled: boolean) {
        const params: HttpParams = new HttpParams().set('isEnabled', String(isEnabled));
        return this.http.get<boolean>(`${this.resourceUrl}/ng/setEnabled/` + actionId, { params: params });
    }

}
