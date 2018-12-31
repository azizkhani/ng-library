import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from '../../../shared/genericService/index';
import {Observable} from 'rxjs';
import {Personel} from '../../core/personel/index';
import {LoginAndLogoutHistoryModel} from '../loginAndLogoutHistory/loginAndLogoutHistory.model';
import {QueryParam, QueryResult} from '../../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class HandAuditingService extends GenericService<LoginAndLogoutHistoryModel> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/security/handlerAuditLogRecord');
    }

    load(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }

    loadClassCombo(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/loadClasses`, {});
    }

    search(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }
}
