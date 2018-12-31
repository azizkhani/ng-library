/**
 *
 *    @ AH.GHORAB/H.RASOULI
 *
 */
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SERVER_API_URL} from '../../app.constants';
import {QueryParam, QueryResult} from '../components/pagination';

export abstract class GenericService<T> {

    public resourceUrl;

    public http: HttpClient;

    protected constructor(http: HttpClient, url: string) {
        this.resourceUrl = SERVER_API_URL + url;
        this.http = http;
    }

    public get(queryParam: QueryParam): Observable<QueryResult<T>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }

    public find(id: any): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/load/${id}`);
    }

    public update(entity: T): Observable<any> {
        return this.http.post(`${this.resourceUrl}/save`, entity)
    }

    public updateList(entities: T[]): Observable<any> {
        return this.http.post(`${this.resourceUrl}/listSave`, entities);
    }

    public delete(id: any): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/delete/${id}`);
    }

    public search(queryParam: QueryParam): Observable<QueryResult<T>> {
        return this.http.get<any>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }
}
