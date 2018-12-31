/**
 *
 *  @ H.RASOULI
 *
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnumHandlerDirectiveService {

    constructor(private http: HttpClient) {
    }

    public loadList(enumKey: string): Observable<any[]> {
        let enumKeyValueHandler = '/rest/core/enumHandler/keyvalues/' + enumKey;
        return this.http.get<any>(enumKeyValueHandler);
    }
}









