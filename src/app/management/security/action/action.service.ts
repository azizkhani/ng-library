/**
 * @ M.AMERY
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Action} from './action.model';
import {SERVER_API_URL} from '../../../app.constants';
import {Observable} from 'rxjs';
import {QueryParam, QueryResult} from '../../../shared/components/pagination';

type EntityResponseGridType = HttpResponse<QueryResult<Action>>;

@Injectable({
    providedIn: 'root'
})
export class ActionService {

    private resourceUrl;

    constructor(private http: HttpClient) {
        this.resourceUrl = SERVER_API_URL + 'rest/core/security/action';
    }

    get(queryParam: QueryParam): Observable<EntityResponseGridType> {
        return this.http.get<QueryResult<Action>>(`${this.resourceUrl}/ng/list/grid`, {
            params: queryParam.toHttpPrams(),
            observe: 'response'
        });
    }

    setEnabled(actionId: number, isEnabled: boolean) {
        let params: HttpParams = new HttpParams().set('isEnabled', String(isEnabled));
        return this.http.get<boolean>(`${this.resourceUrl}/ng/setEnabled/` + actionId, {params: params});
    }

}
