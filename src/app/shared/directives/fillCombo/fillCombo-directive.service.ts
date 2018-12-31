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
export class FillComboDirectiveService {

    constructor(private http: HttpClient) {
    }

    public loadList(url: string): Observable<any[]> {
        return this.http.get<any>(url);
    }
}
