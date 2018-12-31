/*
 *
 * Created By BH-Angular 4 Generator
 * @ A.Azizkhani / AH.Ghorab
 * 8-9-2017
 *
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {GenericService} from '../../../shared/genericService';
import {User} from './user.model';
import {QueryParam} from '../../../shared/components/pagination';


@Injectable({
    providedIn: 'root'
})
export class UserService extends GenericService<User> {

    constructor(http: HttpClient) {
        super(http, 'rest/core/security/user');
    }

    /**
     * TODO: az any be QueryResult<User> taghyir konad
     */
    get(queryParam: QueryParam): Observable<any> {
        return this.http.get<User>(`${this.resourceUrl}/list`, {params: queryParam.toHttpPrams()});
    }

    /**
     * TODO: az anyu be User taghir konad
     */
    load(id: number): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}/load/${id}`);
    }
}
