import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginAndLogoutHistoryModel} from './loginAndLogoutHistory.model';
import {Observable} from 'rxjs';
import {GenericService} from '../../../shared/genericService';
import {Personel} from '../../core/personel';
import {QueryParam, QueryResult} from '../../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class LoginAndLogoutHistoryService extends GenericService<LoginAndLogoutHistoryModel> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/security/loginHistory');
    }

    getData(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }

    search(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }
}
