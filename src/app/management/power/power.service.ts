import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from '../../shared/genericService';
import {Personel} from '../core/personel';
import {Observable} from 'rxjs';
import {LoginAndLogoutHistoryModel} from '../security/loginAndLogoutHistory/loginAndLogoutHistory.model';
import {QueryParam, QueryResult} from '../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class PowerService extends GenericService<LoginAndLogoutHistoryModel> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/menu/MenuItem/');
    }

    load(): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/listMenu/1`, {});
    }

    search(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }
}
