import {Injectable} from '@angular/core';
import {GenericService} from '../../../shared/genericService/index';
import {HttpClient} from '@angular/common/http';
import {BlockIpModel} from './blockIp.model';
import {Personel} from '../../core/personel/index';
import {Observable} from 'rxjs';
import {QueryParam, QueryResult} from '../../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class BlockIpService extends GenericService<BlockIpModel> {


    constructor(http: HttpClient) {
        super(http, 'rest/core/security/blockIp');
    }

    getData(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list/grid`, {params: queryParam.toHttpPrams()});
    }

    unblock(id: number): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/unBlock/` + id);
    }

    save(param: any) {
        console.log(param);
        return this.http.post<any>(`${this.resourceUrl}/save`, param);
    }

    searchjob(queryParam: QueryParam): Observable<QueryResult<Personel>> {
        return this.http.get<any>(`${this.resourceUrl}/list/grid`, {params: queryParam.toHttpPrams()});
    }
}
